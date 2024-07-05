import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable, Subject, finalize, map, take } from 'rxjs';
import { Product } from '../../model/product.model';
import { CategoryService } from '../../services/category.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css',
})
export class EditComponent implements OnInit {
  id: number | undefined;
  productForm: FormGroup;
  product: Product;
  product$: Observable<Product> | undefined;
  submitting = false;
  private destroy$ = new Subject<void>();
  categories$: Observable<any[]>;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private categoryService: CategoryService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.loadCategories();
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];

      if (this.id !== undefined) {
        this.product$ = this.productService.getById(this.id);

        this.productService
          .getById(this.id)
          .pipe(
            map((product) => {
              this.product = product;
              this.initForm(this.product);
            })
          )
          .subscribe();
      }
    });
  }

  onSubmit() {
    if (this.productForm.valid && !this.submitting) {
      this.submitting = true;
      this.productService
        .updateProduct(this.id, this.productForm.value)
        .pipe(
          take(1),
          finalize(() => {
            this.submitting = false;
            this.onCancel();
          })
        )
        .subscribe({
          next: (response) => {
            console.log('Product updated successfully', response);
          },
          error: (error) => {
            console.error('Error updating product', error);
          },
        });
    }
  }

  onCancel() {
    this.router.navigate(['/products']);
  }

  private initForm(product: Product) {
    let productName = product.name;
    let productIdCategory = product.idCategory;
    let productSku = product.sku;
    let productPrice = product.price;
    let productDescription = product.description;

    this.productForm = new FormGroup({
      name: new FormControl(productName, Validators.required),
      idCategory: new FormControl(productIdCategory, Validators.required),
      description: new FormControl(productDescription, Validators.required),
      sku: new FormControl(productSku),
      price: new FormControl(productPrice),

    });
  }

  loadCategories(): void {
    this.categoryService.fetchCategories();
    this.categories$ = this.categoryService.getCategories();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onBack() {
    this.router.navigate(['./products']);
  }
}

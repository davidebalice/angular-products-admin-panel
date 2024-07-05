import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, Observable, Subject, Subscription } from 'rxjs';
import { CategoryService } from 'src/app/services/category.service';
import { Product } from '../../model/product.model';
import { Subcategory } from '../../model/subcategory.model';
import { SubcategoryService } from '../../services/subcategory.service';

@Component({
  selector: 'app-subcategories',
  templateUrl: './subcategories.component.html',
  styleUrls: ['./subcategories.component.css'],
})
export class SubcategoriesComponent implements OnInit, OnDestroy {
  subcategories: Subcategory[] = [];
  selectedSubcategory: Subcategory = null;
  products: Product[] = [];
  filteredProducts: Product[] = [];
  subscription: Subscription;
  isLoading = true;
  selectedIdCategory: number = null;
  showSelect: boolean = false;
  private destroy$ = new Subject<void>();
  categories$: Observable<any[]>;
  categoryForm: FormGroup;

  constructor(
    private categoryService: CategoryService,
    private subcategoryService: SubcategoryService,
    private router: Router
  ) {}

  loadCategories(): void {
    this.categoryService.fetchCategories();
    this.categories$ = this.categoryService.getCategories();
  }

  loadDefaultCategory(): void {
    if (!this.selectedIdCategory) {
      this.categories$.subscribe((categories) => {
        if (categories.length > 0) {
          this.selectedIdCategory = categories[0].id;
          console.log(this.selectedIdCategory);
          this.loadSubcategories(this.selectedIdCategory);
        }
      });
    } else {
      this.loadSubcategories(this.selectedIdCategory);
    }

    this.showSelect = false;
  }

  onCategoryChange(categoryId: number): void {
    this.selectedIdCategory = categoryId;
    this.loadSubcategories(categoryId);
  }

  loadSubcategories(categoryId: number): void {
    this.selectedIdCategory = categoryId;
    this.subcategoryService.fetchSubcategories(categoryId);
    this.subscription = this.subcategoryService
      .getSubcategories()
      .subscribe((subcategories) => {
        this.subcategories = subcategories;
        this.isLoading = false;
      });
  }

  ngOnInit(): void {
    this.loadCategories();
    this.loadDefaultCategory();
    this.categoryForm = new FormGroup({
      idCategory: new FormControl(this.selectedIdCategory),
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onSelectSubcategory(subcategory: Subcategory): void {
    this.selectedSubcategory = subcategory;

    if (subcategory) {
      this.router.navigate([`/products/idsubcat/${subcategory.id}`]);
    }
  }

  onNewSubcategory() {
    this.router.navigate(['/products/subcategories/new']);
  }

  onEditSubcategory(subcategoryId: number) {
    this.router.navigate([`/products/subcategories/${subcategoryId}/edit`]);
  }

  onDelete(categoryId: number) {
    const confirmDelete = confirm(
      'Are you sure you want to delete this subcategory?'
    );
    if (confirmDelete) {
      this.subscription = this.subcategoryService
        .deleteSubcategory(categoryId)
        .pipe(
          catchError((error) => {
            console.error('Error deleting product', error);
            throw error;
          })
        )
        .subscribe({
          next: () => {
            this.subcategoryService.fetchSubcategories(this.selectedIdCategory);
          },
        });
    }
  }
}

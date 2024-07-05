import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subject, finalize, take, takeUntil } from 'rxjs';
import { SubcategoryService } from '../../../services/subcategory.service';


@Component({
  selector: 'app-subcategory-new',
  templateUrl: './subcategory-new.component.html',
  styleUrl: './subcategory-new.component.scss'
})
export class SubcategoryNewComponent {
  categoryForm: FormGroup;
  submitting = false;
  imageFile: File | null = null;
  private destroy$ = new Subject<void>();
  categories$: Observable<any[]>;


  constructor(
    private route: ActivatedRoute,
    private categoryService: SubcategoryService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.categoryForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: [''],
      sku: [''],
      price: [''],
      idSubcategory: 0,
    });
  }

  onFileSelected(event: any) {
    this.imageFile = event.target.files[0];
  }

  onSubmit() {
    if (this.categoryForm.valid && !this.submitting) {
      this.submitting = true;

      this.categoryService
        .addSubcategory(this.categoryForm.value)
        .pipe(
          take(1),
          finalize(() => {
            this.submitting = false;
            this.onCancel();
          }),
          takeUntil(this.destroy$)
        )
        .subscribe({
          next: (response) => {
            console.log('Subcategory added successfully', response);
          },
          error: (error) => {
            //console.error('Error adding product', error);
          },
        });
    }
  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  onBack() {
    this.router.navigate(['./products']);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
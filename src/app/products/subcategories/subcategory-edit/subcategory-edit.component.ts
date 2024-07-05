import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable, Subject, finalize, map, take, takeUntil } from 'rxjs';
import { Subcategory } from '../../../model/subcategory.model';
import { SubcategoryService } from '../../../services/subcategory.service';

@Component({
  selector: 'app-subcategory-edit',
  templateUrl: './subcategory-edit.component.html',
  styleUrl: './subcategory-edit.component.scss',
})
export class SubcategoryEditComponent implements OnInit, OnDestroy {
  id: number | undefined;
  categoryForm: FormGroup;
  category: Subcategory;
  category$: Observable<Subcategory> | undefined;
  submitting = false;
  private destroy$ = new Subject<void>();
  categories$: Observable<any[]>;

  constructor(
    private route: ActivatedRoute,
    private categoryService: SubcategoryService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];

      if (this.id !== undefined) {
        this.category$ = this.categoryService.getById(this.id);

        this.categoryService
          .getById(this.id)
          .pipe(
            map((category) => {
              this.category = category;
              this.initForm(this.category);
            }),
            takeUntil(this.destroy$)
          )
          .subscribe();
      }
    });
  }

  onSubmit() {
    if (this.categoryForm.valid && !this.submitting) {
      this.submitting = true;
      this.categoryService
        .updateSubcategory(this.id, this.categoryForm.value)
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
            console.log('Subcategory updated successfully', response);
          },
          error: (error) => {
            console.error('Error updating category', error);
          },
        });
    }
  }

  onCancel() {
    this.router.navigate(['./products/categories']);
  }

  private initForm(category: Subcategory) {
    let categoryName = category.name;
    let categoryDescription = category.description;

    this.categoryForm = new FormGroup({
      name: new FormControl(categoryName, Validators.required),
      description: new FormControl(categoryDescription),
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onBack() {
    this.router.navigate(['./products/categories']);
  }
}

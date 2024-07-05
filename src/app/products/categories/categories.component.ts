import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Subscription } from 'rxjs';
import { Category } from '../../model/category.model';
import { Product } from '../../model/product.model';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit, OnDestroy {
  categories: Category[] = [];
  selectedCategory: Category = null;
  products: Product[] = [];
  filteredProducts: Product[] = [];
  subscription: Subscription;
  isLoading = true;

  constructor(
    private categoryService: CategoryService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.categoryService.fetchCategories();
    this.subscription = this.categoryService
      .getCategories()
      .subscribe((categories) => {
        this.categories = categories;
        this.isLoading = false;
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onSelectCategory(category: Category): void {
    this.selectedCategory = category;

    if (category) {
      this.router.navigate([`/products/idcat/${category.id}`]);
    }
  }

  onNewCategory() {
    this.router.navigate(['/products/categories/new']);
  }

  onEditCategory(categoryId: number) {
    this.router.navigate([`/products/categories/${categoryId}/edit`]);
  }

  onDelete(categoryId: number) {
    const confirmDelete = confirm(
      'Are you sure you want to delete this category?'
    );
    if (confirmDelete) {
      this.subscription = this.categoryService
        .deleteCategory(categoryId)
        .pipe(
          catchError((error) => {
            console.error('Error deleting product', error);
            throw error;
          })
        )
        .subscribe({
          next: () => {
            this.categoryService.fetchCategories();
          },
        });
    }
  }
}

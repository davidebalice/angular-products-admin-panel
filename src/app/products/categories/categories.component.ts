import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Category } from '../../model/category.model';
import { Product } from '../../model/product.model';
import { CategoryService } from '../../services/category.service';
import { ProductService } from '../../services/product.service';

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
    private productService: ProductService,
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
}

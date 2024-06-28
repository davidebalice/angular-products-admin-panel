import { Component, Input } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/model/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  subscription: Subscription;
  loadedProducts: Product[] = [];
  paginatedProducts: Product[] = [];
  isLoading = true;
  error = null;
  totalItems: number;
  currentPage: number = 1;
  private errorSub: Subscription;
  private queryParamSub: Subscription;
  private routeParamsSub: Subscription;
  @Input() limit: number;
  @Input() pagination: boolean;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.errorSub = this.productService.error.subscribe((errorMessage) => {
      this.error = errorMessage;
    });

    this.queryParamSub = this.route.queryParams.subscribe((params) => {
      const searchKey = params['key'] || '';
      const categoryId = parseInt(this.route.snapshot.paramMap.get('idcat'));
      if (categoryId) {
        this.fetchProducts(searchKey, categoryId);
      } else {
        this.fetchProducts(searchKey);
      }
    });

    this.routeParamsSub = this.route.params.subscribe((params) => {
      const categoryId = params['idcat'] || 0;
      const searchKey = this.route.snapshot.queryParams['key'] || '';
      if (categoryId) {
        this.fetchProducts(searchKey, categoryId);
      } else {
        this.fetchProducts(searchKey);
      }
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    if (this.errorSub) {
      this.errorSub.unsubscribe();
    }
    if (this.queryParamSub) {
      this.queryParamSub.unsubscribe();
    }
    if (this.routeParamsSub) {
      this.routeParamsSub.unsubscribe();
    }
  }

  onUpdateProducts() {
    this.fetchProducts();
  }

  fetchProducts(searchKey?: string, categoryId?: number) {
    this.isLoading = true;
    this.subscription = this.productService
      .fetchProducts(searchKey, categoryId, this.limit, this.currentPage)
      .subscribe({
        next: (response) => {
          this.isLoading = false;
          this.loadedProducts = response.products.map((product) => ({
            ...product,
            categoryName: product.categoryDto?.name || 'Unknown Category',
          }));
          this.totalItems = response.totalItems;
          this.paginateProducts();
        },
        error: (error) => {
          this.isLoading = false;
          this.error = error.message;
          console.log(error);
        },
      });
  }


  onPageChanged(event: PageEvent): void {
    this.currentPage = event.pageIndex + 1;
    this.fetchProducts();
  }

  paginateProducts() {
    const startIndex = (this.currentPage - 1) * this.limit;
    const endIndex = startIndex + this.limit;
    this.paginatedProducts = this.loadedProducts.slice(startIndex, endIndex);
  }
  
}

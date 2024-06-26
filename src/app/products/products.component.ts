import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from '../model/product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  subscription: Subscription;
  loadedProducts: Product[] = [];
  isLoading = true;
  error = null;
  private errorSub: Subscription;
  private queryParamSub: Subscription;
  private routeParamsSub: Subscription;
  @Input() limit: number;

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
      .fetchProducts(searchKey, categoryId, this.limit)
      .subscribe({
        next: (products) => {
          this.isLoading = false;

          this.loadedProducts = products.map((product) => ({
            ...product,
            categoryName: product.categoryDto?.name || 'Unknown Category',
          }));
        },
        error: (error) => {
          this.isLoading = false;
          this.error = error.message;
          console.log(error);
        },
      });
  }
}

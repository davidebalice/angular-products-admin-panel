import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../model/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  selectedProduct: Product;
  pagination: boolean = true;

  constructor(private router: Router) {}

  ngOnInit() {}

  onBackProducts() {}

  onNewProduct() {
    this.router.navigate(['/products/new']);
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subscription, catchError, take } from 'rxjs';
import { AppConfig } from '../../app-config';
import { Product } from '../../model/product.model';
import { ProductService } from '../../services/product.service';
import { DetailComponent } from '../detail/detail.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent implements OnInit {
  @Input() product: Product;
  fullStars: number = 0;
  halfStar: boolean = false;
  private subscription: Subscription;
  constructor(
    private productService: ProductService,
    private router: Router,
    public dialog: MatDialog
  ) {}

  openDialog(id: number): void {
    this.dialog.open(DetailComponent, {
      width: '90%',
      maxWidth: '800px',
      height: '90%',
      maxHeight: '450px',
      data: { id: id },
    });
  }

  ngOnInit(): void {}

  onSelected() {
    this.router.navigate(['/products', this.product.id]);
  }

  private fetchProducts() {
    this.subscription = this.productService
      .fetchProducts()
      .pipe(
        take(1),
        catchError((error) => {
          console.error('Error fetching products', error);
          throw error;
        })
      )
      .subscribe((products) => {
        this.router.navigate(['/reload']).then(() => {
          this.router.navigate(['/products']);
        });
        console.log('Updated products after deletion', products);
      });
  }

  getFullImageUrl(imageUrl: string): string {
    if (!imageUrl || imageUrl.trim() === '') {
      return '../../../assets/images/nophoto.jpg';
    }
    return `${AppConfig.apiUrl}/products/image/${imageUrl}`;
  }

  onDeleteProduct(productId: number) {
    const confirmDelete = confirm(
      'Are you sure you want to delete this product?'
    );
    if (confirmDelete) {
      this.subscription = this.productService
        .deleteProduct(productId)
        .pipe(
          catchError((error) => {
            console.error('Error deleting product', error);
            throw error;
          })
        )
        .subscribe({
          next: () => {
            this.fetchProducts();
          },
        });
    }
  }

  onPhotoProduct(productId: number) {
    console.log(productId);
    this.router.navigate(['/products/photo', productId]);
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  onEditProduct(productId: number) {
    this.router.navigate([`/products/${productId}/edit`]);
  }

  generateStarsArray(difficulty: number): string[] {
    const maxStars = 5;
    let starsArray: string[] = [];

    for (let i = 1; i <= maxStars; i++) {
      if (i <= difficulty) {
        starsArray.push('star');
      } else if (i - 0.5 <= difficulty) {
        starsArray.push('star_half');
      } else {
        starsArray.push('star_border');
      }
    }

    return starsArray;
  }
}

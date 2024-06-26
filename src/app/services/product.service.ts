import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject, catchError, map, tap, throwError } from 'rxjs';
import { Product } from '../model/product.model';

@Injectable()
export class ProductService implements OnInit, OnDestroy {
  productsList = new Subject<Product[]>();
  productSelected = new Subject<Product>();
  error = new Subject<string>();
  csrfToken: Subject<string> = new Subject<string>();
  csrfValue: string;
  private products: Product[];
  tokenValue: string;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    this.csrfToken.subscribe((value: string) => {
      this.csrfValue = value;
    });
  }

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
    });
  }

  private getHeadersForm(): HttpHeaders {
    return new HttpHeaders({
      'Cache-Control': 'no-cache',
    });
  }

  getCsrf() {
    const csrfUrl = '/csrf';

    this.http.post(csrfUrl, null, {}).subscribe(
      (response: any) => {
        this.csrfToken.next(response.token.trim());
        this.csrfValue = response.token.trim();
        this.error.next(null);
      },
      (error) => {
        console.error('Error fetching CSRF token', error);
        this.error.next(error.message);
      }
    );
  }

  fetchProducts(
    keyword?: string,
    category?: number,
    limit?: number
  ): Observable<Product[]> {
    const headers = this.getHeaders();
    let apiUrl = '/products/';
    let params = new HttpParams();

    if (keyword) {
      apiUrl = '/products/search';
      params = params.append('keyword', keyword);
    } else {
      if (category > 0) {
        apiUrl = '/products/searchByCategoryId';
        console.log('param category');
        console.log(category);
        params = params.append('categoryId', category);
      }
    }

    if (limit) {
      params = params.append('size', limit);
    }

    return this.http
      .get<{ Product }>(apiUrl, {
        headers,
        params,
      })
      .pipe(
        map((responseData) => {
          console.log(responseData);
          const productArray: Product[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              productArray.push({ ...responseData[key] });
            }
          }
          this.products = productArray;
          this.productsList.next(this.products.slice());
          return productArray;
        }),
        catchError((error) => {
          if (error.status === 401) {
            this.router.navigate(['/login']);
          }
          return throwError(() => new Error('Error loading products.'));
        })
      );
  }

  getProducts() {
    return this.products.slice();
  }

  getProduct(index: number) {
    return this.products[index];
  }

  getById(id: number): Observable<Product> {
    const headers = this.getHeaders();

    let params = new HttpParams();
    params = params.append('test1', '1');
    params = params.append('test2', '1');

    return this.http
      .get<Product>(`/products/${id}`, {
        headers,
        params,
      })
      .pipe(
        map((responseData) => {
          return responseData;
        }),
        catchError((error) => {
          console.error('Errore nella richiesta HTTP', error);
          return throwError(error);
        })
      );
  }

  addProduct(product: Product) {
    const headers = this.getHeaders();

    return this.http
      .post(`/products/add`, product, {
        withCredentials: true,
        headers,
      })
      .pipe(
        tap((response) => {
          console.log('Response from backend:', response);
        }),
        catchError((error: HttpErrorResponse) => {
          if (error.status === 401) {
            this.router.navigate(['/login']);
          }
          return throwError(() => new Error('Error adding product.'));
        })
      );
  }

  addProductWithPhoto(product: FormData) {
    const headers = this.getHeadersForm();

    return this.http.post(`/products/add-with-photo`, product, { headers }).pipe(
      tap((response) => {
        console.log('Response from backend:', response);
      }),
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          this.router.navigate(['/login']);
        }
        return throwError(() => new Error('Error adding product.'));
      })
    );
  }

  updateProduct(id: number, dataProduct: Product) {
    const headers = this.getHeaders();
    console.log(dataProduct);
    return this.http
      .patch(`/products/${id}`, dataProduct, {
        withCredentials: true,
        responseType: 'text',
        headers,
      })
      .pipe(
        tap((response) => {
          console.log('Response from backend:', response);
        }),
        catchError((error: HttpErrorResponse) => {
          if (error.status === 401) {
            this.router.navigate(['/login']);
          }
          return throwError(() => new Error('Error adding product.'));
        })
      );
  }

  deleteProduct(productId: number) {
    const headers = this.getHeaders();
    return this.http.delete(`/products/${productId}`, { headers });
  }

  /*
  uploadProduct(id: number, imageFile: File) {
    const formData = new FormData();
    if (imageFile instanceof File) {
      formData.append('image', imageFile, imageFile.name);

      const url = `/products/${id}/uploadImage`;

      const headers = new HttpHeaders();
      headers.set('Cache-Control', 'no-cache');

      return this.http.post(url, formData, { headers }).pipe(
        tap((response) => {
          console.log('Response from backend:', response);
        }),
        catchError((error: HttpErrorResponse) => {
          if (error.status === 401) {
            this.router.navigate(['/login']);
          }
          return throwError(() => new Error('Error uploading image.'));
        })
      );
    }
  }*/
}
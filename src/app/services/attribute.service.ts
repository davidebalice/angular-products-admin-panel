import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  BehaviorSubject,
  Observable,
  Subscription,
  catchError,
  map,
  tap,
  throwError,
} from 'rxjs';
import { Attribute } from '../model/attribute.model';

@Injectable({
  providedIn: 'root',
})
export class AttributeService {
  private attributesUrl = '/attributes/';
  private attributesSubject = new BehaviorSubject<Attribute[]>([]);
  private subscription: Subscription;
  constructor(private http: HttpClient, private router: Router) {}

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
    });
  }

  fetchAttributes(): void {
    const headers = this.getHeaders();
    this.subscription = this.http
      .get<Attribute[]>(this.attributesUrl, { headers })

      .pipe(
        tap((attributes: Attribute[]) => {
          this.attributesSubject.next(attributes);
        }),
        catchError((error) => {
          console.error('Error fetching attributes:', error);
          return throwError(error);
        })
      )
      .subscribe();
  }

  getAttributes(): Observable<Attribute[]> {
    return this.attributesSubject.asObservable();
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  addAttribute(attribute: Attribute) {
    const headers = this.getHeaders();

    return this.http
      .post(`/attributes/add`, attribute, {
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
          return throwError(() => new Error('Error adding attribute.'));
        })
      );
  }

  updateAttribute(id: number, dataAttribute: Attribute) {
    const headers = this.getHeaders();
    return this.http
      .patch(`/attributes/${id}`, dataAttribute, {
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
          return throwError(() => new Error('Error adding categoty.'));
        })
      );
  }

  deleteAttribute(attributeId: number) {
    const headers = this.getHeaders();
    return this.http.delete(`/attributes/${attributeId}`, { headers });
  }

  getById(id: number): Observable<Attribute> {
    const headers = this.getHeaders();

    return this.http
      .get<Attribute>(`/attributes/${id}`, {
        headers,
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
}

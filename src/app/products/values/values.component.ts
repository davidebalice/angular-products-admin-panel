import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, Subject, Subscription, takeUntil } from 'rxjs';
import {
  ConfirmDialogComponent,
  ConfirmDialogData,
} from 'src/app/components/confirm-dialog/confirm-dialog.component';
import { AttributeService } from 'src/app/services/attribute.service';
import { Product } from '../../model/product.model';
import { Value } from '../../model/value.model';
import { ValueService } from '../../services/value.service';
@Component({
  selector: 'app-values',
  templateUrl: './values.component.html',
  styleUrls: ['./values.component.css'],
})
export class ValuesComponent implements OnInit, OnDestroy {
  values: Value[] = [];
  selectedValue: Value = null;
  products: Product[] = [];
  filteredProducts: Product[] = [];
  subscription: Subscription;
  isLoading = true;
  selectedIdAttribute: number = null;
  showSelect: boolean = false;
  private destroy$ = new Subject<void>();
  categories$: Observable<any[]>;
  attributeForm: FormGroup;

  constructor(
    private attributeService: AttributeService,
    private valueService: ValueService,
    private router: Router,
    private route: ActivatedRoute,
    private dialog: MatDialog
  ) {}

  loadAttributes(): void {
    this.attributeService.fetchAttributes();
    this.categories$ = this.attributeService.getAttributes();
  }

  loadDefaultAttribute(): void {
    console.log(this.selectedIdAttribute);
    if (!this.selectedIdAttribute) {
      console.log(this.selectedIdAttribute);
      console.log(this.selectedIdAttribute);
      console.log(this.selectedIdAttribute);
      console.log(this.selectedIdAttribute);

      this.categories$.subscribe((categories) => {
        if (categories.length > 0) {
          console.log(categories.length);
          console.log(categories.length);
          console.log(categories.length);
          this.selectedIdAttribute = categories[0].id;
          console.log(this.selectedIdAttribute);
          this.loadValues(this.selectedIdAttribute);
        }
      });
    } else {
      this.loadValues(this.selectedIdAttribute);
    }

    this.showSelect = false;
  }

  onAttributeChange(attributeId: number): void {
    this.selectedIdAttribute = attributeId;
    this.loadValues(attributeId);
  }

  loadValues(attributeId: number): void {
    this.selectedIdAttribute = attributeId;
    this.valueService.fetchValues(attributeId);
    this.valueService
      .getValues()
      .pipe(takeUntil(this.destroy$))
      .subscribe((values) => {
        this.values = values;
        this.isLoading = false;
      });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const idAttribute = +params['idAttribute'];
      if (idAttribute) {
        this.selectedIdAttribute = idAttribute;
        this.loadAttributes();
        this.loadValues(idAttribute);
      } else {
        if (this.selectedIdAttribute) {
          this.loadValues(this.selectedIdAttribute);
          this.loadDefaultAttribute();
        } else {
          this.loadAttributes();
          this.loadDefaultAttribute();
        }
      }
    });

    this.attributeForm = new FormGroup({
      idAttribute: new FormControl(this.selectedIdAttribute),
    });

    this.valueService
      .getValues()
      .pipe(takeUntil(this.destroy$))
      .subscribe((values) => {
        this.values = values;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onSelectValue(value: Value): void {
    this.selectedValue = value;

    if (value) {
      this.router.navigate([`/products/idsubcat/${value.id}`]);
    }
  }

  onNewValue() {
    this.router.navigate(['/products/values/new']);
  }

  onEditValue(valueId: number) {
    this.router.navigate([`/products/values/${valueId}/edit`]);
  }

  onDelete(attributeId: number, item: string) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Confirm Delete',
        message: 'Are you sure you want to delete this value?',
        item: item,
      } as ConfirmDialogData,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.subscription = this.valueService
          .deleteValue(attributeId)
          .pipe(
            catchError((error) => {
              console.error('Error deleting product', error);
              throw error;
            })
          )
          .subscribe({
            next: () => {
              this.valueService.fetchValues(
                this.selectedIdAttribute
              );
            },
          });
      }
    });
  }
}

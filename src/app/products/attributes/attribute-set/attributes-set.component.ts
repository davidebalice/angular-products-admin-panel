import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { catchError, Subscription, throwError } from 'rxjs';
import { ProductAttributeResponse } from 'src/app/model/attribute.model';
import { AttributeAndValues } from 'src/app/model/attributeAndValues.model';
import { Product } from '../../../model/product.model';
import { AttributeService } from '../../../services/attribute.service';
@Component({
  selector: 'app-attributes-set',
  templateUrl: './attributes-set.component.html',
  styleUrls: ['./attributes-set.component.css'],
})
export class AttributesSetComponent implements OnInit, OnDestroy {
  attributes: AttributeAndValues[] = [];
  settedAttributes: ProductAttributeResponse[] = [];
  selectedAttribute: AttributeAndValues = null;
  products: Product[] = [];
  filteredProducts: Product[] = [];
  subscription: Subscription;
  isLoading = true;
  idProduct: number;

  constructor(
    private attributeService: AttributeService,
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.idProduct = +params['id'];

      this.attributeService.fetchSettedAttributesAndValues(this.idProduct);
      this.subscription = this.attributeService
        .getSettedAttributesAndValues()
        .subscribe((attributes) => {
          this.settedAttributes = attributes;
          console.log('this.settedAttributes');
          console.log(this.settedAttributes);
        });
    });

    this.attributeService.fetchAttributesAndValues();
    this.subscription = this.attributeService
      .getAttributesAndValues()
      .subscribe((attributes) => {
        this.attributes = attributes;
        this.isLoading = false;
      });
  }

  handleCheckboxChange(
    idAttribute: number,
    idValue: number,
    isChecked: boolean
  ) {
    if (isChecked) {
      this.attributeService
        .addProductValue(idAttribute, idValue, this.idProduct, 'add')
        .pipe(
          catchError((error) => {
            console.error('Error adding value to product:', error);
            return throwError(error);
          })
        )
        .subscribe((response) => {
          console.log('Value added to product:', response);
        });
    } else {
      this.attributeService
        .addProductValue(idAttribute, idValue, this.idProduct, 'remove')
        .pipe(
          catchError((error) => {
            console.error('Error adding value to product:', error);
            return throwError(error);
          })
        )
        .subscribe((response) => {
          console.log('Value added to product:', response);
        });
    }
  }

  isAttributeValueSelected(attributeId: number, valueId: number): boolean {
    console.log(attributeId + ' ' + valueId);

    console.log(this.settedAttributes);

    return this.settedAttributes.some(
      (attr) =>
        attr.attribute.id === attributeId && attr.attributeValue.id === valueId
    );

    /*
    const isSelected = this.settedAttributes.some(attr => {
      console.log("Current attribute:", attr.id, "and value:", attr.values[0].id);
      return attr.id === attributeId && attr.values.id === valueId;
    });
  
    console.log("Is selected:", isSelected);
    return true;*/
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ProductsRoutingModule } from './products-routing.module';

import { MatModule } from '../appModules/mat.module';
import { CardComponent } from './card/card.component';
import { ListComponent } from './list/list.component';
import { ProductsComponent } from './products.component';

@NgModule({
  declarations: [ProductsComponent, CardComponent,ListComponent],
  imports: [CommonModule, ProductsRoutingModule, MatModule],
})
export class ProductsModule {}

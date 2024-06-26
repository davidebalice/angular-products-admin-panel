import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablesRoutingModule } from './tables-routing.module';
import { MatModule } from '../appModules/mat.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatModule,
    TablesRoutingModule
  ]
})
export class TablesModule { }

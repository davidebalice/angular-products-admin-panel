import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WidgetsRoutingModule } from './widgets-routing.module';
import { MatModule } from '../appModules/mat.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    WidgetsRoutingModule,
    MatModule
  ]
})
export class WidgetsModule { }

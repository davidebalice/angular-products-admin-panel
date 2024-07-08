import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatDialogModule } from '@angular/material/dialog';
import { MatModule } from '../appModules/mat.module';
import { ComponentsRoutingModule } from './components-routing.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, ComponentsRoutingModule, MatModule, MatDialogModule],
})
export class ComponentsModule {}

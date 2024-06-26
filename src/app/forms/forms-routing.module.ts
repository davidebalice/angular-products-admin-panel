import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElementsComponent } from './elements/elements.component';
import { LayoutsComponent } from './layouts/layouts.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'elements',
        component: ElementsComponent,
        data: {
          title: 'elements'
        }
      }
    ]
  },{
    path: '',
    children: [
      {
        path: 'layouts',
        component: LayoutsComponent,
        data: {
          title: 'layouts'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }

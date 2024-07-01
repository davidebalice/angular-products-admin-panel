import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../services/auth.guard';
import { CategoriesComponent } from './categories/categories.component';
import { ProductsComponent } from './products.component';
import { PhotoComponent } from './photo/photo.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'categories',
    component: CategoriesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'photo/:id',
    component: PhotoComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}

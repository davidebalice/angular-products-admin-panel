import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../services/auth.guard';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryEditComponent } from './categories/category-edit/category-edit.component';
import { CategoryNewComponent } from './categories/category-new/category-new.component';
import { EditComponent } from './edit/edit.component';
import { NewComponent } from './new/new.component';
import { PhotoComponent } from './photo/photo.component';
import { ProductsComponent } from './products.component';

import { SubcategoriesComponent } from './subcategories/subcategories.component';
import { SubcategoryEditComponent } from './subcategories/subcategory-edit/subcategory-edit.component';
import { SubcategoryNewComponent } from './subcategories/subcategory-new/subcategory-new.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'new',
    component: NewComponent,
    canActivate: [AuthGuard],
  },
  {
    path: ':id/edit',
    component: EditComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'photo/:id',
    component: PhotoComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'categories',
    component: CategoriesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'categories/new',
    component: CategoryNewComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'categories/:id/edit',
    component: CategoryEditComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'subcategories',
    component: SubcategoriesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'subcategories/new',
    component: SubcategoryNewComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'subcategories/:id/edit',
    component: SubcategoryEditComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}

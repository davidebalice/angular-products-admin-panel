import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatModule } from '../appModules/mat.module';
import { AuthInterceptor } from '../interceptors/auth-interceptor';
import { RestApiUrlInterceptor } from '../interceptors/rest-api-url.interceptor';
import { AuthService } from '../services/auth.service';
import { ProductService } from '../services/product.service';
import { CardComponent } from './card/card.component';

import { MatDialogModule } from '@angular/material/dialog';
import { SharedModule } from '../shared/shared.module';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryEditComponent } from './categories/category-edit/category-edit.component';
import { CategoryNewComponent } from './categories/category-new/category-new.component';
import { DetailComponent } from './detail/detail.component';
import { EditComponent } from './edit/edit.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ListComponent } from './list/list.component';
import { NewComponent } from './new/new.component';
import { PhotoComponent } from './photo/photo.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { SearchComponent } from './search/search.component';
import { SubcategoriesComponent } from './subcategories/subcategories.component';
import { SubcategoryEditComponent } from './subcategories/subcategory-edit/subcategory-edit.component';
import { SubcategoryNewComponent } from './subcategories/subcategory-new/subcategory-new.component';
@NgModule({
  declarations: [
    ProductsComponent,
    SearchComponent,
    CardComponent,
    DetailComponent,
    EditComponent,
    ListComponent,
    NewComponent,
    PhotoComponent,
    GalleryComponent,
    CategoriesComponent,
    CategoryEditComponent,
    CategoryNewComponent,
    SubcategoriesComponent,
    SubcategoryEditComponent,
    SubcategoryNewComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MatModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    SharedModule,
  ],
  exports: [SharedModule],
  providers: [
    AuthService,
    ProductService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RestApiUrlInterceptor,
      multi: true,
    },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    provideAnimationsAsync(),
  ],
})
export class ProductsModule {}

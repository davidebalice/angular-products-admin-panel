import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatModule } from '../appModules/mat.module';
import { AuthInterceptor } from '../interceptors/auth-interceptor';
import { RestApiUrlInterceptor } from '../interceptors/rest-api-url.interceptor';
import { CurrencyFormatPipe } from '../pipes/currency-format.pipe';
import { DefaultImagePipe } from '../pipes/defaultImage.pipe';
import { ProtectedImagePipe } from '../pipes/protected-images.pipe';
import { AuthService } from '../services/auth.service';
import { ProductService } from '../services/product.service';
import { CardComponent } from './card/card.component';
import { DetailComponent } from './detail/detail.component';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';
import { NewComponent } from './new/new.component';
import { PhotoComponent } from './photo/photo.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { SearchComponent } from './search/search.component';
import { CategoriesComponent } from './categories/categories.component';

@NgModule({
  declarations: [
    ProductsComponent,
    SearchComponent,
    CardComponent,
    CategoriesComponent,
    DetailComponent,
    EditComponent,
    ListComponent,
    NewComponent,
    PhotoComponent,
    ProtectedImagePipe,
    DefaultImagePipe,
    CurrencyFormatPipe,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MatModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [ProtectedImagePipe, DefaultImagePipe, CurrencyFormatPipe],
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

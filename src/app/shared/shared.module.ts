import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { RouterModule } from '@angular/router';
import { MatModule } from '../appModules/mat.module';
import { AuthInterceptor } from '../interceptors/auth-interceptor';
import { RestApiUrlInterceptor } from '../interceptors/rest-api-url.interceptor';
import { FooterComponent } from '../layouts/footer/footer.component';
import { HeaderComponent } from '../layouts/header/header.component';
import { SidebarComponent } from '../layouts/sidebar/sidebar.component';
import { AuthService } from '../services/auth.service';
import { ProductService } from '../services/product.service';

@NgModule({
  exports: [
    CommonModule,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    // ColorSwitcherComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    MatModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [FooterComponent, HeaderComponent, SidebarComponent],
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
export class SharedModule {}

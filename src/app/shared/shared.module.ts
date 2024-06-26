import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FooterComponent } from '../layouts/footer/footer.component';
import { HeaderComponent } from '../layouts/header/header.component';
import { SidebarComponent } from '../layouts/sidebar/sidebar.component';
// import { ColorSwitcherComponent } from './color-switcher/color-switcher.component';
import { MatModule } from '../appModules/mat.module';

@NgModule({
  exports: [
    CommonModule,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    // ColorSwitcherComponent
  ],
  imports: [RouterModule, CommonModule, MatModule],
  declarations: [
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    // ColorSwitcherComponent
  ],
  providers: [],
})
export class SharedModule {}

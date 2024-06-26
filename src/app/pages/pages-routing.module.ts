import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { E404Component } from './e404/e404.component';
import { E505Component } from './e505/e505.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';

const routes: Routes = [ {
 
      path: 'error-404',
      component: E404Component,
      data: {
        title: 'Error 404'
      }
    
  
},
{
 
      path: 'error-505',
      component: E505Component,
      data: {
        title: 'Error 505'
      }
    
  
},
{
 
      path: 'coming-soon',
      component: ComingSoonComponent,
      data: {
        title: 'Coming Soon'
      }
    
  
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }

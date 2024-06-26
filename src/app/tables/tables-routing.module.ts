import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicTableComponent } from './basic-table/basic-table.component';
import { PagingTableComponent } from './paging-table/paging-table.component';
import { SortingTableComponent } from './sorting-table/sorting-table.component';

const routes: Routes = [

  {
    path: '',
    children: [
      {
        path: 'basic-table',
        component: BasicTableComponent,
        data: {
          title: 'basic elements'
        }
      }
    ]
  },
  {
    path: '',
    children: [
      {
        path: 'paging-table',
        component: PagingTableComponent,
        data: {
          title: 'Paging Table'
        }
      }
    ]
  },
  {
    path: '',
    children: [
      {
        path: 'sorting-table',
        component: SortingTableComponent,
        data: {
          title: 'Sorting Table'
        }
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablesRoutingModule { }

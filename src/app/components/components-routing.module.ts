import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonsComponent } from './buttons/buttons.component';
import { BadgesComponent } from './badges/badges.component';
import { CardsComponent } from './cards/cards.component';
import { ChipsComponent } from './chips/chips.component';
import { ExpansionComponent } from './expansion/expansion.component';
import { MenuComponent } from './menu/menu.component';
import { ListComponent } from './list/list.component';
import { TabsComponent } from './tabs/tabs.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'buttons',
        component: ButtonsComponent,
        data: {
          title: 'buttons'
        }
      }
    ]
  },
  {
    path: '',
    children: [
      {
        path: 'badges',
        component: BadgesComponent,
        data: {
          title: 'badges'
        }
      }
    ]
  },
  {
    path: '',
    children: [
      {
        path: 'cards',
        component: CardsComponent,
        data: {
          title: 'cards'
        }
      }
    ]
  },
  {
    path: '',
    children: [
      {
        path: 'chips',
        component: ChipsComponent,
        data: {
          title: 'chips'
        }
      }
    ]
  },
  {
    path: '',
    children: [
      {
        path: 'expansion',
        component: ExpansionComponent,
        data: {
          title: 'expansion'
        }
      }
    ]
  },
  {
    path: '',
    children: [
      {
        path: 'menu',
        component: MenuComponent,
        data: {
          title: 'menu'
        }
      }
    ]
  },
  {
    path: '',
    children: [
      {
        path: 'list',
        component: ListComponent,
        data: {
          title: 'list'
        }
      }
    ]
  },
  {
    path: '',
    children: [
      {
        path: 'tabs',
        component: TabsComponent,
        data: {
          title: 'tabs'
        }
      }
    ]
  },
  {
    path: '',
    children: [
      {
        path: 'toolbar',
        component: ToolbarComponent,
        data: {
          title: 'toolbar'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }

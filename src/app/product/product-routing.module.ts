import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PopupComponent } from '../popup/popup.component';
import { BoxListComponent } from './box-list/box-list.component';
import { DishListComponent } from './dish-list/dish-list.component';
import { ProductchildComponent } from './productchild/productchild.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { WrapperComponentComponent } from './wrapper-component/wrapper-component.component';


const routes: Routes = [
  {
    path: '',
    component: WrapperComponentComponent,
    children: [
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        component: ProductsListComponent
      },
      {
        path: 'dishs',
        component: DishListComponent
        
      },
      {
        path: 'boxs',
        component: BoxListComponent
        
      },
      {
        path: 'test',
        component: PopupComponent
        
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
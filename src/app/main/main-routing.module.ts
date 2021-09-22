import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main/main.component';
import { AuthGuard } from '../auth/guard/auth.guard'

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../pages/home/home.module').then( m => m.HomeModule ),
        canActivate: [AuthGuard]
      },
      {
        path: 'cart',
        loadChildren: () => import('../pages/cart/cart.module').then( m => m.CartModule ),
        canActivate: [AuthGuard]
      },
      {
        path: 'buy',
        loadChildren: () => import('../pages/buy/buy.module').then( m => m.BuyModule ),
        canActivate: [AuthGuard]
      },
      {
        path: '**',
        redirectTo: 'home'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }

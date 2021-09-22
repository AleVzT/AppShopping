import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './components/cart/cart.component';

import { NgZorroAntdModule } from "../../ng-zorro-antd/ng-zorro-antd.module";


@NgModule({
  declarations: [CartComponent],
  imports: [
    CommonModule,
    CartRoutingModule,
    NgZorroAntdModule
  ]
})
export class CartModule { }

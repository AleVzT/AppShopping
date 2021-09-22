import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuyRoutingModule } from './buy-routing.module';
import { BuyComponent } from './components/buy/buy.component';

import { NgZorroAntdModule } from "../../ng-zorro-antd/ng-zorro-antd.module";


@NgModule({
  declarations: [BuyComponent],
  imports: [
    CommonModule,
    BuyRoutingModule,
    NgZorroAntdModule
  ]
})
export class BuyModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';

import { NgZorroAntdModule } from "../../ng-zorro-antd/ng-zorro-antd.module";


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgZorroAntdModule
  ]
})
export class HomeModule { }

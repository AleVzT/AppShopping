import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";

import { NavbarComponent } from './navbar/navbar.component';
import { NgZorroAntdModule } from "../ng-zorro-antd/ng-zorro-antd.module";


@NgModule({
  declarations: [
    NavbarComponent
  ],
  exports: [
    NavbarComponent,
  ],
  imports: [
    HttpClientModule,
    RouterModule,
    CommonModule,
    NgZorroAntdModule
  ]
})
export class SharedModule { }

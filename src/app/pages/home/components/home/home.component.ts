import { Component, OnInit } from '@angular/core';
import { NzMessageService } from "ng-zorro-antd/message";

import { AppService } from 'src/app/services/app.service';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ProductList = [];

  constructor(
    private appService: AppService,
    private message: NzMessageService
  ) { }

  ngOnInit(): void {
    this.appService.getProduct()
        .subscribe( resp => {
          this.ProductList = resp;
        });

  }

  addToCart(data) {
    this.appService.addCart(data)
        .subscribe( resp => {
          console.log('data', resp);
        });

    this.createMessage('success');
  }

  createMessage(type: string): void {
    this.message.create(type, `¡Se añadio el producto al carrito!`);
  }

  

}

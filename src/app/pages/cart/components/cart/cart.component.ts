import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/services/app.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  product_Cart: any = [];

  valueDefault = 3;

  constructor(
    private appService: AppService,
  ) { }

  ngOnInit(): void {
    this.openCart();
  }

  finishBuy() {
    this.appService.createOrder()
      .subscribe( resp => {
          const data: any = resp;
          console.log('data createOrder', data);
          if(!data.ok){
            Swal.fire('¡Lo sentimos!', data.mensaje, 'error');
          }else {
            Swal.fire('¡Felicidades!', data.mensaje, 'success');
            this.openCart();
          }
      });
  }

  openCart() {
    this.appService.getCartsPending()
        .subscribe( resp => {
          const data: any = resp;
          if(data.ok == false){
            Swal.fire('¡Lo sentimos!', data.mensaje, 'error')
          } else {
            this.product_Cart = resp;
          }
        });
  }

}

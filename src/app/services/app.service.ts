import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Product } from '../models/product.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from '../store/app.reducer';
import { UsuarioModel } from '../auth/models/usuario.models';

@Injectable({
    providedIn: 'root'
})

export class AppService {

    private url = 'https://us-central1-firestore-shopping-9f5f3.cloudfunctions.net/api';
    id_user: string;

    public auth: Observable<String>;
    
    constructor(
        private http: HttpClient,
        private store: Store<AppState>,
    ){ }

    addCart( product: Product ){
        this.store.select('auth')
            .subscribe( data => {
                const arrayTemp: any = data
                this.id_user = arrayTemp.user.id;

        })

        const data = {
          "product_id": product.id,
          "user_id": this.id_user
        };

        return this.http.post(`${ this.url }/productsAdd`, data);
              
    } 

    deleteProductCart( product: Product ){
       
        // Se elimina un producto al carrito

    }

    getProduct() {
        return this.http.get(`${ this.url }/products`)
        .pipe(
          map( resp => {
            return this.crearArreglo(resp);
          })
        );
    }

    private crearArreglo( tempObj: object ) {
        const arrayTemp = [];
        Object.keys( tempObj ).forEach( key => {
          const temp = tempObj[key];
          arrayTemp.push( temp );
        });    
        return arrayTemp;
    }

    createOrder(){
      this.store.select('auth')
      .subscribe( data => {
          const arrayTemp: any = data
          this.id_user = arrayTemp.user.id;
      })
      return this.http.get(`${ this.url }/finishBuy/${this.id_user}`);
    }

    getCartsPending() {
      this.store.select('auth')
          .subscribe( data => {
              const arrayTemp: any = data
              this.id_user = arrayTemp.user.id;
      })
        return this.http.get(`${ this.url }/opencart/${this.id_user}`)
        .pipe(
          map( resp => {
            return resp;
          })
        );
    }

    getCartsCompleted() {
      this.store.select('auth')
          .subscribe( data => {
              const arrayTemp: any = data
              this.id_user = arrayTemp.user.id;

      })
        return this.http.get(`${ this.url }/carts/${this.id_user}`)
        .pipe(
          map( resp => {
            return resp;
          })
        );
    }


}
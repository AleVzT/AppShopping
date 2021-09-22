import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { UsuarioModel } from '../models/usuario.models';


import { AppState } from 'src/app/store/app.reducer';
import { SetUserAction, UnSetUserAction } from 'src/app/store/actions/auth.actions';
 
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'https://us-central1-firestore-shopping-9f5f3.cloudfunctions.net/api';
  private user: UsuarioModel;

  constructor(
    private http: HttpClient,
    private store: Store<AppState>,
    private router: Router
  ) { }

  login(usuario){

    return this.http.post(`${ this.url }/login`, usuario)
      .pipe(
        map( resp => {
          const data: any = resp;
          if(data.ok == false) {
            return data;
          } else {
            this.user = data;
            this.store.dispatch( new SetUserAction( this.user ));
            return this.user;
          }
        })
      );
  }

  createUser( usuario: UsuarioModel ) {
    return this.http.post(`${ this.url }/registro`, usuario);
  }

  logout(): void {
    this.store.dispatch( new UnSetUserAction() );
    this.router.navigateByUrl('/auth/login');
  }

   updateState( obj ) {
    this.store.dispatch({
      type: obj.action,
      payload: obj.data
    });
  }

  getAllState() {
    return this.store.select(state => state);
  }

}

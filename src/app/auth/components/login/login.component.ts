import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { Subscription  } from "rxjs";

import Swal from 'sweetalert2';

import { UsuarioModel } from '../../models/usuario.models';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  forma: FormGroup;
  usuario: UsuarioModel = new UsuarioModel();

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {
    this.creandoFormLogin();
  }

  ngOnInit(): void {
  }

  creandoFormLogin() {
     this.forma = this.fb.group({
      email:   [ '', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      password: [ '', Validators.required ],
    });
  }

  submitForm(value: { email: string; password: string; }){

    this.auth.login( value )
        .subscribe(
            resp => {
            const data: any = resp;
            if (data.ok == false) {
              Swal.fire('¡Lo sentimos!', 'Email y/o password No validos.', 'error')
            } else {
              this.router.navigateByUrl('/home');
            }
        });
  }

}

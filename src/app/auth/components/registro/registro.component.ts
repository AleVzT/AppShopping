import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, ValidationErrors } from "@angular/forms";

import { UsuarioModel } from '../../models/usuario.models';
import { AuthService } from '../../service/auth.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  forma: FormGroup;
  usuario: UsuarioModel = new UsuarioModel();

  constructor(
    private fb: FormBuilder,
    private auth: AuthService
  ) {
    this.creandoFormRegistro();
  }

  ngOnInit(): void {
  }

  creandoFormRegistro() {
    this.forma = this.fb.group({
      nameFull: ['', [Validators.required]],
      email:   [ '', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      password: ['', [Validators.required]],
      confirm: ['', [this.confirmValidator]],
    });
  }

  confirmValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { error: true, required: true };
    } else if (control.value !== this.forma.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  validateConfirmPassword(): void {
    setTimeout(() => this.forma.controls.confirm.updateValueAndValidity());
  }

  submitForm(value: { nameFull: string; email: string; password: string; }): void {
    for (const key in this.forma.controls) {
      if (this.forma.controls.hasOwnProperty(key)) {
        this.forma.controls[key].markAsDirty();
        this.forma.controls[key].updateValueAndValidity();
      }
    }
    Swal.fire({
      showCancelButton: false,
      icon: 'info',
      text: 'Espere por favor...'
    });
    Swal.showLoading();
    this.auth.createUser( value )
      .subscribe( resp => {
        Swal.close();
        const data: any = resp; 
        if (!data.ok) {
          console.log('error data', data);
          Swal.fire('Oops...', data.mensaje, 'error')
        } else {
          console.log('isOKData', data);
          Swal.fire(
            'Felicitaciones!',
            data.mensaje,
            'success'
          )
          // this.router.navigateByUrl('/login');
        }
      });
  }

  resetForm(e: MouseEvent): void {
    e.preventDefault();
    this.forma.reset();
    for (const key in this.forma.controls) {
      if (this.forma.controls.hasOwnProperty(key)) {
        this.forma.controls[key].markAsPristine();
        this.forma.controls[key].updateValueAndValidity();
      }
    }
  }
}

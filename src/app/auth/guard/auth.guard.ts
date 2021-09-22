import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
      return new Promise(resolve => {
        this.authService.getAllState().subscribe( state => {
          const stateTemp: any = state;
          if (stateTemp.auth.user) {
            resolve(true);
          } else {
            resolve(false);
            this.router.navigateByUrl('/auth/login');
          }
        });
      });
  }
}
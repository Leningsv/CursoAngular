import { Injectable } from '@angular/core';
import { Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    CanActivate
  } from '@angular/router';

import { AuthService } from './auth.service';
import { stagger } from '@angular/core/src/animation/dsl';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor( private _authService: AuthService ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log('route', route, 'state', state);
    if (this._authService.isAuthenticated()) {
      console.log('Paso el guard');
      return true;
    }else {
      console.error('Blokeado por el guard');
      return false;
    }
  }

}

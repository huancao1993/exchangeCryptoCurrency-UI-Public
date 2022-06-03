import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(public auth: AuthService, public router: Router) { }
  canActivate(): boolean {
    if (!this.auth.isAuthenticated()) {
      this.auth.removeCache();
      this.router.navigate(["login"]);
      return false;
    }
    return true;
  }
}

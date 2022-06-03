import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class RoleGuardService implements CanActivate {
  constructor(public auth: AuthService, public router: Router) { }
  canActivate(route: ActivatedRouteSnapshot): boolean {
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(["login"]);
      return false;
    }
    const tokenPayload = this.auth.getTokenPayload();
    if(!this.auth.CheckPermission(route.data.roles)) {
      this.router.navigate(["login"]);
      return false;
    }
    return true;
  }
  protected checkRole(roles: string[], role) {
    if (!roles) {
      return false;
    }
    return roles.indexOf(role) !== -1;
  }
}

import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable()
export class AuthService {
  private static tokenPayload: any;
  constructor(public jwtHelper: JwtHelperService) {
    // console.log("create AuthService");
  }
  public isAuthenticated(): boolean {
    const token = this.getToken();
    if (!token) {
      return false;
    }
    return !this.jwtHelper.isTokenExpired(token as string);
  }
  public getTokenPayload(): any {
    const token = this.getToken();
    return this.jwtHelper.decodeToken(token as string);
  }
  public getToken() {
    const token = localStorage.getItem('token');
    return token;
  }
  public cacheTokenPayload() {
    if (!AuthService.tokenPayload) {
      AuthService.tokenPayload = this.getTokenPayload();
    }
    return AuthService.tokenPayload;
  }
  public clearCache() {
    AuthService.tokenPayload = undefined;

  }
  public CheckPermission(roleActions: string | undefined) {
    if (!roleActions) {
      return false;
    }
    const roles = this.cacheTokenPayload().role;
    // console.log('role: ', roles);
    // console.log('roleActions: ', roleActions);
    if (roles === "admin") {
      return true;
    }
    if (!roleActions) {
      return false;
    }
    const roleActive = roleActions.split(",");
    for (let item of roleActive) {
      if (roles.indexOf(item) !== -1) {
        return true;
      }
    }
    return false;
  }
  public removeCache() {
    localStorage.removeItem("token");
    AuthService.tokenPayload = undefined;
  }
}

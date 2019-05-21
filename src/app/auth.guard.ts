import { AuthService } from "./auth.service";
import { Injectable } from "@angular/core";
import {
  CanActivate,
  CanActivateChild,
  CanLoad,
  Route,
  UrlSegment,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router
} from "@angular/router";
import { Observable } from "rxjs";
import { UserService } from "./user.service";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(
    private auth: AuthService,
    private router: Router,
    private user: UserService
  ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.auth.isLoggedIn) {
      //we might be logged in

      return true;
      //localstorage way of auth to see if user is logged in
      //this.router.navigate(["login"]);
    }

    //localstorage
    //return this.auth.isLoggedIn;

    //server
    // create isLoggedIn.php
    return this.user.isLoggedIn().pipe(
      map(res => {
        if (res.status) {
          this.auth.setLoggedIn(true);
        } else {
          this.router.navigate(["login"]);
          return false;
        }
      })
    );
  }

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return true;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }
}

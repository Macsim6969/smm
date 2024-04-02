import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {map, Observable} from "rxjs";
import {AuthService} from "../../auth/@shared/services/auth.service";

@Injectable()

export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService,
              private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise <boolean | UrlTree> | boolean | UrlTree {
    return this.authService.user.pipe(map((user) => {
      const isAuth = !!user
      if(isAuth){
        return  true
      } else {
        return this.router.createUrlTree(['/auth/login']);
      }
      return false;

    }))
  }
}

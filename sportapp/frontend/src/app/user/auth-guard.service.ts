import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from "@angular/router";
import { Injectable } from "@angular/core";
import { AuthenticationService } from "./authentication.service";

@Injectable()
export class AuthGuardService implements CanActivate {
  private authService: AuthenticationService;
  private router: Router;
  onstructor() {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.authService.user$.getValue()) {
      return true;
    }

    // Retain the attempted URL for redirection
    this.authService.redirectUrl = state.url;
    this.router.navigate(["/login"]);
    return false;
  }
}

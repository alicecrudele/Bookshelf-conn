import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { RepositoryService } from "../services/repository.service";
import { SessionService } from "../services/session.service";
import { Observable } from "rxjs";

@Injectable()
export class CanActivateGuard implements CanActivate {
  constructor(private repositorySvc: RepositoryService, private sessionSvc: SessionService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    this.sessionSvc.clearAutosave();

    return Observable.create(observer => {
      var found = false;
      //this.repositorySvc.isUserLogged<UserInfo>(state.url).then((data) => {
      //  var userInfo = this.sessionSvc.getUserInfo();
      //  var roles: UserRoles[] = route.data['roles'];
      //  if (userInfo != null && roles.includes(userInfo.role)) {
      //    found = true;
      //    observer.next(true);
      //    observer.complete();
      //  }
      //  if (!found) {
      //    observer.next(false);
      //    this.router.navigateByUrl("/error");
      //    observer.complete();
      //  }
      //}, error => {
      //  this.sessionSvc.setUserInfo(null);
      //  if (error.status == 401) {
      //    window.location.href = error.error.error;
      //    observer.next(false);
      //    observer.complete();
      //  } else if (error.status == 403) {
      //    observer.next(false);
      //    this.router.navigateByUrl("/error");
      //    observer.complete();
      //  }
      //});
    })
  }
} 

import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router } from "@angular/router";
import { RepositoryService } from "../services/repository.service";
import { SessionService } from "../services/session.service";
import { Observable } from "rxjs";

@Injectable()
export class CanActivateGuard implements CanActivate {
  constructor(private repositorySvc: RepositoryService, private sessionSvc: SessionService, private router: Router) { }

  canActivate() {
    console.log("CanActivateGuard");
    return true;
  }
} 

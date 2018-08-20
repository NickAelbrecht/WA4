import { ClubDataService } from "./club-data.service";
import { Injectable } from "@angular/core";
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Club } from "./club.model";
@Injectable()
export class ClubResolver implements Resolve<Club> {
  constructor(private clubService: ClubDataService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Club> {
    return this.clubService.getClub(route.params["id"]);
  }
}

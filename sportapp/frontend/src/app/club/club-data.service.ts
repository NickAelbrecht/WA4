import { Injectable } from "@angular/core";
import { Club } from "./club.model";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { map } from "rxjs/operators";
import { Sport } from "./sport/sport.model";

@Injectable()
export class ClubDataService {
  private _clubs = new Array<Club>();
  private readonly _appUrl = "/API/";

  constructor(private http: HttpClient) {
    let club1 = new Club("test");
    this._clubs.push(club1);
  }
  get clubs(): Observable<Club[]> {
    return this.http
      .get(this._appUrl)
      .pipe(
        map((list: any[]): Club[] => list.map(item => new Club(item.naam)))
      );
  }

  addNewClub(club: Club) {
    return this.http
      .post(this._appUrl, club)
      .pipe(map((item: any): Club => new Club(item.naam)));
  }

  addSportToClub(sp: Sport, cl: Club): Observable<Sport> {
    const theUrl = `${this._appUrl}/club/${cl.id}/sporten`;
    return this.http.post(theUrl, sp).pipe(map(Sport.fromJSON));
  }
}

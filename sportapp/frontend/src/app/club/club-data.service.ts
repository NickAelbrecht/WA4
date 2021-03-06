import { Rating } from "./rating/rating.model";
import { Injectable } from "@angular/core";
import { Club } from "./club.model";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { map } from "rxjs/operators";
import { Sport } from "./sport/sport.model";

@Injectable()
export class ClubDataService {
  private readonly _appUrl = "/API";

  constructor(private http: HttpClient) {}

  get clubs(): Observable<Club[]> {
    return this.http.get(`${this._appUrl}/clubs/`).pipe(
      map((list: any[]): Club[] => list.map(Club.fromJSON))
      //list.map(item => new Club(item.naam)))
    );
  }

  addNewClub(club: Club): Observable<Club> {
    //console.log(club);
    return this.http
      .post(`${this._appUrl}/clubs/`, club)
      .pipe(map(Club.fromJSON));
  }

  removeClub(cl: Club): Observable<Club> {
    return this.http
      .delete(`${this._appUrl}/club/${cl.id}`)
      .pipe(map(Club.fromJSON));
  }

  addSportToClub(sp: Sport, cl: Club): Observable<Sport> {
    const theUrl = `${this._appUrl}/club/${cl.id}/sporten`;
    return this.http.post(theUrl, sp).pipe(map(Sport.fromJSON));
  }

  getClub(id: string): Observable<Club> {
    return this.http.get(`${this._appUrl}/club/${id}`).pipe(map(Club.fromJSON));
  }

  addRatingToClub(rate: Rating, cl: Club): Observable<Club> {
    const theUrl = `${this._appUrl}/club/${cl.id}/ratings`;
    return this.http.post(theUrl, rate).pipe(map(Club.fromJSON));
  }
}

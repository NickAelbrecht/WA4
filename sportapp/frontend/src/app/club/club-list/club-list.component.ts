import { ClubDataService } from "./../club-data.service";
import { Component, OnInit } from "@angular/core";
import { Club } from "../club.model";
import { Subject } from "rxjs/Subject";
import { distinctUntilChanged, debounceTime, map } from "rxjs/operators";
import { HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: "app-club-list",
  templateUrl: "./club-list.component.html",
  styleUrls: ["./club-list.component.css"]
})
export class ClubListComponent implements OnInit {
  public filterClubNaam: string;
  public filterClub$ = new Subject<string>();

  public filterClubLocatie: string;
  public filterClubLocatie$ = new Subject<string>();

  public errorMsg: string;
  private _clubs: Club[];

  constructor(private _clubDataService: ClubDataService) {
    this.filterClub$
      .pipe(
        distinctUntilChanged(),
        debounceTime(400),
        map(val => val.toLowerCase())
      )
      .subscribe(val => (this.filterClubNaam = val));

    this.filterClubLocatie$
      .pipe(
        distinctUntilChanged(),
        debounceTime(400),
        map(val => val.toLowerCase())
      )
      .subscribe(val => (this.filterClubLocatie = val));
  }

  ngOnInit() {
    this._clubDataService.clubs.subscribe(
      clubs => (this._clubs = clubs),
      (error: HttpErrorResponse) => {
        this.errorMsg = `Error ${error.status} bij het ophalen van clubs: ${
          error.error
        }`;
      }
    );
    //this._clubs.sort((a: Club, b: Club) => a.naam.localeCompare(b.naam));
  }

  get clubs() {
    return this._clubs;
  }

  removeClub(club: Club) {
    this._clubDataService.removeClub(club).subscribe(
      item => (this._clubs = this._clubs.filter(val => item.id !== val.id)),
      (error: HttpErrorResponse) => {
        this.errorMsg = `Error ${error.status} bij het verwijderen van club ${
          club.naam
        }: ${error.error}`;
      }
    );
  }
}

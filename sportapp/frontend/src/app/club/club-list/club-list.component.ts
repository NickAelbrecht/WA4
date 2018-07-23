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
  }

  ngOnInit() {
    this._clubDataService.clubs.subscribe(
      items => (this._clubs = items),
      (error: HttpErrorResponse) => {
        this.errorMsg = `Error ${
          error.status
        } while trying to retrieve clubs: ${error.error}`;
      }
    );
  }

  get clubs() {
    return this._clubs;
  }

  removeClub(club: Club) {
    this._clubDataService.removeClub(club).subscribe(
      item => (this._clubs = this._clubs.filter(val => item.id !== val.id)),
      (error: HttpErrorResponse) => {
        this.errorMsg = `Error ${error.status} while removing clubs for ${
          club.naam
        }: ${error.error}`;
      }
    );
  }
}

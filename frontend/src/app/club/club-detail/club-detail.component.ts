import { AuthenticationService } from "./../../user/authentication.service";
import { Club } from "./../club.model";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HttpErrorResponse } from "@angular/common/http";
import { Rating } from "../rating/rating.model";
import { ClubDataService } from "../club-data.service";

@Component({
  selector: "app-club-detail",
  templateUrl: "./club-detail.component.html",
  styleUrls: ["./club-detail.component.css"]
})
export class ClubDetailComponent implements OnInit {
  private _club: Club;
  errorMsg: string;

  ratingLijst: boolean[] = [true, true, true, true, true];
  public rating: number;

  constructor(
    private route: ActivatedRoute,
    private authService: AuthenticationService,
    private clubDataService: ClubDataService
  ) {}

  get club(): Club {
    return this._club;
  }
  get gemiddeldeRating(): number {
    return this._club.gemiddeldeRating();
  }

  get prijs() {
    if (this._club.prijs === null) {
      return 0;
    }
    return this._club.prijs;
  }

  get locatie() {
    if (this._club.locatie === null || !this._club.locatie) {
      return "Geen locatie ingevuld.";
    }
    return this._club.locatie;
  }

  setStar(data: any) {
    this.rating = data + 1;
    for (var i = 0; i <= 4; i++) {
      if (i <= data) {
        this.ratingLijst[i] = false;
      } else {
        this.ratingLijst[i] = true;
      }
    }
  }

  addRating() {
    if (this.hasNotVoted(this.authService.user$.value)) {
      let rating = new Rating(this.rating);
      rating.user = this.authService.user$.value;
      this.clubDataService
        .addRatingToClub(rating, this._club)
        .subscribe(cl => (this._club = cl));
    }
  }

  hasNotVoted(naam: string): boolean {
    let flag: boolean = true;
    this._club.ratings.forEach(rating => {
      if (rating.user == naam) {
        flag = false;
      }
    });
    return flag;
  }

  ngOnInit() {
    this.route.data.subscribe(
      item => (this._club = item["club"]),
      (error: HttpErrorResponse) => {
        this.errorMsg = `Error ${error.status} bij het ophalen van de club: ${
          error.error
        }`;
      }
    );
  }
}

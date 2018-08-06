import { Club } from "./../club.model";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ClubDataService } from "../club-data.service";
import { HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: "app-club-detail",
  templateUrl: "./club-detail.component.html",
  styleUrls: ["./club-detail.component.css"]
})
export class ClubDetailComponent implements OnInit {
  private _club: Club;
  errorMsg: string;

  constructor(
    private route: ActivatedRoute,
    private clubDataService: ClubDataService
  ) {}

  get club(): Club {
    return this._club;
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

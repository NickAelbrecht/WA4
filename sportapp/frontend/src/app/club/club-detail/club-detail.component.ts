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

  get prijs(){
    if(this._club.prijs===null){
      return 0;
    }
    return this._club.prijs;
  }

  get locatie(){
    if(this._club.locatie===null||!this._club.locatie){
      return "Geen locatie ingevuld.";
    }
    return this._club.locatie;
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

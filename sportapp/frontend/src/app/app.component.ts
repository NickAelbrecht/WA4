import { ClubDataService } from "./club/club-data.service";
import { Component, OnInit } from "@angular/core";
import { Club } from "./club/club.model";
import { Observable } from "rxjs/Observable";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  //providers: [ClubDataService]
})
export class AppComponent {//implements OnInit {
  title = "app";

 /*private _clubs: Club[];
  public filterClubName: string;

  applyFilter(filter: string) {
    this.filterClubName = filter;
  }

  ngOnInit() {
    this._clubDataService.clubs.subscribe(items => (this._clubs = items));
  }

  constructor(private _clubDataService: ClubDataService) {}

  get clubs() {
    return this._clubs;
  }

  newClubAdded(club) {
    this._clubDataService
      .addNewClub(club)
      .subscribe(item => this._clubs.push(item));
  }*/
}

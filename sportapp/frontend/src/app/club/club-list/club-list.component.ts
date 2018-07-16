import { ClubDataService } from "./../club-data.service";
import { Component, OnInit } from "@angular/core";
import { Club } from "../club.model";

@Component({
  selector: "app-club-list",
  templateUrl: "./club-list.component.html",
  styleUrls: ["./club-list.component.css"]
})
export class ClubListComponent implements OnInit {
  private _clubs: Club[];
  constructor(private _clubDataService: ClubDataService) {}

  ngOnInit() {
    this._clubDataService.clubs.subscribe(items => (this._clubs = items));
  }
}

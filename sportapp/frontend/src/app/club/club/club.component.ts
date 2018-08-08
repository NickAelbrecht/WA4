import { Club } from "../club.model";
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-club",
  templateUrl: "./club.component.html",
  styleUrls: ["./club.component.css"]
})
export class ClubComponent implements OnInit {
  @Input() public club: Club;

  @Output() public deleteClub = new EventEmitter<Club>();

  constructor() {}

  ngOnInit() {}

  removeClub() {
    if (
      confirm("Ben je zeker dat je " + this.club.naam + " wil verwijderen?")
    ) {
      this.deleteClub.emit(this.club);
    }
  }
}

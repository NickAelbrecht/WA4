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
    this.deleteClub.emit(this.club);
  }
}

import { Club } from "./../club.model";
import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-add-club",
  templateUrl: "./add-club.component.html",
  styleUrls: ["./add-club.component.css"]
})
export class AddClubComponent implements OnInit {
  @Output() public newClub = new EventEmitter<Club>();

  constructor() {}

  ngOnInit() {}
  addClub(newclubname: HTMLInputElement): boolean {
    const club = new Club(newclubname.value);
    this.newClub.emit(club);
    return false;
  }
}

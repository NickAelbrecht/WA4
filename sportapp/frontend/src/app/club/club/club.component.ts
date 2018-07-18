import { Club } from "../club.model";
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-club",
  templateUrl: "./club.component.html",
  styleUrls: ["./club.component.css"]
})
export class ClubComponent implements OnInit {
  /*naam: string;
  prijs: number;
  locatie: string;
  categorie: string;
  sporten: string[];*/
  @Input() public club: Club;
  @Output() public deleteClub = new EventEmitter<Club>();
  constructor() {
    /* this.categorie = "balsport";
    this.locatie = "Aalst";
    this.naam = "EA";
    this.prijs = 150;
    this.sporten = ["Voetbal", "atletiek"];*/
  }

  ngOnInit() {}

  removeClub() {
    this.deleteClub.emit(this.club);
  }
}

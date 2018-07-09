import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-club",
  templateUrl: "./club.component.html",
  styleUrls: ["./club.component.css"]
})
export class ClubComponent implements OnInit {
  naam: string;
  prijs: number;
  locatie: string;
  categorie: string;
  sporten: string[];
  constructor() {
    this.categorie = "balsport";
    this.locatie = "Aalst";
    this.naam = "EA";
    this.prijs = 150;
    this.sporten = ["Voetbal", "atletiek"];
  }

  ngOnInit() {}
}

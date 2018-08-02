import { Component, OnInit, Input } from "@angular/core";
import { Sport } from "./sport.model";

@Component({
  selector: "app-sport",
  templateUrl: "./sport.component.html",
  styleUrls: ["./sport.component.css"]
})
export class SportComponent implements OnInit {
  @Input() public sport: Sport;
  
  constructor() {}

  ngOnInit() {}
}

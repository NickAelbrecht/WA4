import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { AuthenticationService } from "./user/authentication.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [] //ClubDataService]
})
export class AppComponent {
  title = "app";
  constructor(private authService: AuthenticationService) {}

  get currentUser(): Observable<string> {
    return this.authService.user$;
  }
}

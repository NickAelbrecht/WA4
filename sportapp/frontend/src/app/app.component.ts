import { Component, OnInit, Inject } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { AuthenticationService } from "./user/authentication.service";
import { Title } from "../../node_modules/@angular/platform-browser";
import { DOCUMENT } from "@angular/platform-browser";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [] //ClubDataService]
})
export class AppComponent {
  constructor(
    private authService: AuthenticationService,
    private titleService: Title
  ) {
    this.setTitle();
  }

  get currentUser(): Observable<string> {
    return this.authService.user$;
  }
  public setTitle() {
    this.titleService.setTitle("Welkom bij de sportapp");
  }
}

import { Club } from "../club.model";
import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  FormArray
} from "@angular/forms";
import { Sport } from "../sport/sport.model";
import { debounceTime, distinctUntilChanged } from "rxjs/operators";
import { ClubDataService } from "../club-data.service";
import { HttpErrorResponse } from "@angular/common/http";
import { Router } from "../../../../node_modules/@angular/router";

@Component({
  selector: "app-add-club",
  templateUrl: "./add-club.component.html",
  styleUrls: ["./add-club.component.css"]
})
export class AddClubComponent implements OnInit {
  //@ViewChild("popup1") popup1: Popup;

  public club: FormGroup;
  public errorMsg: string;

  constructor(
    private fb: FormBuilder,
    private _clubDataService: ClubDataService,
    private router: Router
  ) {}

  get sporten(): FormArray {
    return <FormArray>this.club.get("sporten");
  }

  ngOnInit() {
    this.club = this.fb.group({
      naam: ["", [Validators.required, Validators.minLength(2)]],
      locatie: [""],
      prijs: [""],
      sporten: this.fb.array([this.createSporten()])
    });
    this.sporten.valueChanges
      .pipe(
        debounceTime(400),
        distinctUntilChanged()
      )
      .subscribe(spLijst => {
        const lastElement = spLijst[spLijst.length - 1];
        if (lastElement.sportnaam && lastElement.sportnaam.length > 2) {
          this.sporten.push(this.createSporten());
        } else if (spLijst.length >= 2) {
          const secondToLast = spLijst[spLijst.length - 2];
          if (secondToLast.sportnaam.length < 1) {
            this.sporten.removeAt(this.sporten.length - 1);
          }
        }
      });
  }

  createSporten(): FormGroup {
    return this.fb.group({
      sportnaam: [""]
    });
  }

  onSubmit() {
    const club = new Club(this.club.value.naam);
    club.prijs = this.club.value.prijs;
    club.locatie = this.club.value.locatie;
    // club.sporten = this.club.value.sporten;
    for (const sport of this.club.value.sporten) {
      //console.log(sport);
      if (sport.sportnaam.length > 2) {
        const sport1 = new Sport(sport.sportnaam);
        club.addSport(sport1);
        // console.log(sport1);
      }
    }
    if (club.naam.length < 1) {
      this.errorMsg = "De clubnaam mag niet leeg zijn!";
    } else if (club.sporten.length < 1) {
      this.errorMsg = "Een club moet minstens 1 sport bevatten!";
      this.club.reset();
    } else {
      this._clubDataService.addNewClub(club).subscribe(
        () => {},
        (error: HttpErrorResponse) => {
          this.errorMsg = `Error ${
            error.status
          } bij het toevoegen van een club ${club.naam}: ${error.error}`;
        }
      );
    }
    if (this.club.valid) {
      this.club.reset();
      setTimeout(() => {
        this.router.navigate(["/club/list"]);
      }, 1000);
    }
  }

  /*  ClickButton() {
    this.popup1.options = {
      header: "Voltooid",
      color: "green", // red, blue....
      widthProsentage: 40, // The with of the popou measured by browser width
      animationDuration: 1, // in seconds, 0 = no animation
      showButtons: true, // You can hide this in case you want to use custom buttons
      confirmBtnContent: "OK", // The text on your confirm button
      cancleBtnContent: "Cancel", // the text on your cancel button
      confirmBtnClass: "btn btn-default", // your class for styling the confirm button
      cancleBtnClass: "btn btn-default", // you class for styling the cancel button
      animation: "fadeInDown" // 'fadeInLeft', 'fadeInRight', 'fadeInUp', 'bounceIn','bounceInDown'
    };

    this.popup1.show();
  }*/
}

import { Club } from "../club.model";
import { Component, OnInit, Output, EventEmitter } from "@angular/core";
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
import { Placeholder } from "../../../../node_modules/@angular/compiler/src/i18n/i18n_ast";

@Component({
  selector: "app-add-club",
  templateUrl: "./add-club.component.html",
  styleUrls: ["./add-club.component.css"]
})
export class AddClubComponent implements OnInit {
  private club: FormGroup;
  public errorMsg: string;

  constructor(
    private fb: FormBuilder,
    private _clubDataService: ClubDataService
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

    for (const sport of this.club.value.sporten) {
      if (sport.sportnaam.length > 2) {
        const sport1 = new Sport(sport.sportnaam);
        console.log(sport1);
        club.addSport(sport1);
        console.log(sport1);
      }
    }
   /* this._clubDataService.addNewClub(club).subscribe(
      () => {},
      (error: HttpErrorResponse) => {
        this.errorMsg = `Error ${error.status} bij het toevoegen van een club ${
          club.naam
        }: ${error.error}`;
      }
    );*/
    if (club.naam.length < 1) {
      this.errorMsg = "De clubnaam mag niet leeg zijn!";
    } else if (club.sporten.length < 1) {
      this.errorMsg = "Een club moet minstens 1 sport bevatten!";
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
  }
}

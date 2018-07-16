import { Club } from "./../club.model";
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

@Component({
  selector: "app-add-club",
  templateUrl: "./add-club.component.html",
  styleUrls: ["./add-club.component.css"]
})
export class AddClubComponent implements OnInit {
  @Output() public newClub = new EventEmitter<Club>();

  private club: FormGroup;
  public errorMsg: string;

  constructor(private fb: FormBuilder, private _clubDataService:ClubDataService) {}

  ngOnInit() {
    this.club = this.fb.group({
      naam: this.fb.control("", Validators.required),
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
        }
      });
  }

  createSporten(): FormGroup {
    return this.fb.group({
      sportnaam: ["", [Validators.required, Validators.minLength(3)]]
    });
  }
  get sporten(): FormArray {
    return <FormArray>this.club.get("sporten");
  }

  onSubmit() {
    const club = new Club(this.club.value.naam);
    for (const sport of this.club.value.sporten) {
      if (sport.sportnaam.length > 2) {
        club.addSport(new Sport(sport.sportnaam));
      }
    }

    //this.newClub.emit(club);
    this._clubDataService.addNewClub(club).subscribe(
      () => {},
      (error: HttpErrorResponse) => {
        this.errorMsg = `Error ${error.status} while adding
          recipe for ${club.naam}: ${error.error}`;
      }
    );
  }

  /*addClub(newclubname: HTMLInputElement): boolean {
    const club = new Club(newclubname.value);
    this.newClub.emit(club);
    return false;
  }*/
}

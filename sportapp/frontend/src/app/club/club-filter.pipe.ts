import { Pipe, PipeTransform } from "@angular/core";
import { Club } from "./club.model";

@Pipe({
  name: "clubFilter"
  // pure: false
})
export class ClubFilterPipe implements PipeTransform {
  transform(clubs: Club[], naam: string, locatie: string): Club[] {
    if (clubs && clubs.length) {
      return clubs.filter(club => {
        if (
          naam &&
          club.naam.toLowerCase().indexOf(naam.toLowerCase()) === -1
        ) {
          return false;
        }
        return true;
      });
    } else {
      return clubs;
    }
  }
}

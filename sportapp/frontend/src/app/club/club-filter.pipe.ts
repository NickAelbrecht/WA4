import { Pipe, PipeTransform } from "@angular/core";
import { Club } from "./club.model";

@Pipe({
  name: "clubFilter"
  // pure: false
})
export class ClubFilterPipe implements PipeTransform {
  transform(clubs: Club[], naam: string): Club[] {
    if (!naam || naam.length === 0) {
      return clubs;
    }
    return clubs.filter(rec =>
      rec.naam.toLowerCase().startsWith(naam.toLowerCase())
    );
  }
}

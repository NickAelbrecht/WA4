import { Pipe, PipeTransform } from "@angular/core";
import { Club } from "./club.model";

@Pipe({
  name: "clubFilter2"
})
export class ClubFilter2Pipe implements PipeTransform {
  transform(clubs: Club[], locatie: string): Club[] {
    if (!locatie || locatie.length === 0) {
      return clubs;
    }
    return clubs.filter(cl =>
      cl.locatie.toLowerCase().startsWith(locatie.toLowerCase())
    );
  }
}

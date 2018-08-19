import { Pipe, PipeTransform } from "@angular/core";
import { Club } from "./club.model";

@Pipe({
  name: "clubSorteer"
})
export class ClubSorteerPipe implements PipeTransform {
  transform(clubs: Club[]): Club[] {
    clubs.sort((a: Club, b: Club) => {
      if (a.naam.toLowerCase() < b.naam.toLowerCase()) {
        return -1;
      } else if (a.naam.toLowerCase() > b.naam.toLowerCase()) {
        return 1;
      } else {
        return 0;
      }
    });
    return clubs;
  }
}

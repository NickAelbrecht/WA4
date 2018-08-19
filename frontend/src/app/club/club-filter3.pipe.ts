import { Pipe, PipeTransform } from "@angular/core";
import { Club } from "./club.model";
import { Sport } from "./sport/sport.model";

@Pipe({
  name: "clubFilter3"
})
export class ClubFilter3Pipe implements PipeTransform {
  transform(clubs: Club[], sport: string): Club[] {
    let s: Sport;
    let cls: Club[];
    if (!sport || sport.length === 0) {
      return clubs;
    }
    return clubs.filter(cl =>
      cl.sporten.map(s => s.naam.toLowerCase()).includes(sport.toLowerCase())
    );
  }
}
// forEach(s =>s.naam.toLowerCase()).
// cl.sporten.forEach(s.naam => s.naam.toLowerCase();
//.toLowerCase().startsWith(locatie.toLowerCase())

/*clubs.filter(cl =>
  cl.sporten.map(s => s.naam.toLowerCase()).includes(sport.toLowerCase())
);*/
/*for (let i = 0; i < clubs.length; i++) {
      let sporten = clubs[i].sporten;
      for (let j = 0; j < sporten.length; i++) {
        if (sporten[j].naam.toLowerCase() === sport.toLowerCase()) {
          cls.push(clubs[i]);
        }
      }
    }
    return cls;*/

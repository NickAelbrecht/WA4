import { Sport } from "./sport/sport.model";
import { Rating } from "./rating/rating.model";

export class Club {
  private _naam: string;
  private _locatie: string;
  private _prijs: number;
  private _sporten: Sport[];
  private _id: string;
  private _ratings: Rating[];

  constructor(naam: string, sporten: Sport[] = [], ratings?: Rating[]) {
    this._naam = naam;
    this._sporten = sporten; //|| new Array();
    this._ratings = ratings || new Array();
    //console.log(this._ratings); --> lege array
  }

  get naam(): string {
    return this._naam;
  }
  get locatie(): string {
    return this._locatie;
  }
  set locatie(locatie: string) {
    this._locatie = locatie;
  }
  get prijs(): number {
    return this._prijs;
  }

  set prijs(prijs: number) {
    this._prijs = prijs;
  }

  get sporten(): Sport[] {
    return this._sporten;
  }
  set sporten(sporten: Sport[]) {
    this._sporten = sporten;
  }

  get ratings(): Rating[] {
    return this._ratings;
  }

  addRating(rating: Rating) {
    this._ratings.push(rating);
  }

  gemiddeldeRating(): number {
    let gemiddelde = 0;
    console.log(this._ratings);
    console.log(this._ratings.length);
    this._ratings.forEach(rate => (gemiddelde += rate.rating));
    gemiddelde = gemiddelde / this._ratings.length;
    return gemiddelde;
  }

  addSport(sp: Sport) {
    this._sporten.push(sp);
  }

  static fromJSON(json: any): Club {
    const cl = new Club(json.naam, json.sporten); //.map(Sport.fromJSON));
    cl._id = json._id;
    cl._locatie = json.locatie;
    cl._prijs = json.prijs;
    cl._ratings = json.ratings;

    return cl;
  }

  toJSON() {
    return {
      _id: this._id,
      naam: this._naam,
      sporten: this._sporten, //.map(sp => sp.toJSON()),
      prijs: this._prijs,
      locatie: this._locatie,
      ratings: this._ratings
    };
  }

  get id(): string {
    return this._id;
  }
}

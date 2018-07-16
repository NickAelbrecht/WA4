import { Sport } from "./sport/sport.model";

export class Club {
  private _naam: string;
  private _locatie: string;
  private _prijs: number;
  private _sporten: Sport[];
  _id: string;

  constructor(naam: string, sporten?: Sport[]) {
    this._naam = naam;
    this._sporten = sporten || new Array();
  }

  get naam(): string {
    return this._naam;
  }
  get locatie(): string {
    return this._locatie;
  }
  get prijs(): number {
    return this._prijs;
  }
  get sporten(): Sport[] {
    return this._sporten;
  }

  addSport(sp: Sport) {
    this._sporten.push(sp);
  }

  static fromJSON(json: any): Club {
    const cl = new Club(json.naam, json.sporten.map(Sport.fromJSON));
    cl._id = json._id;

    return cl;
  }

  toJSON() {
    return {
      _id: this._id,
      naam: this._naam,
      sporten: this._sporten.map(sp => sp.toJSON())
    };
  }

  get id(): string {
    return this._id;
  }
}
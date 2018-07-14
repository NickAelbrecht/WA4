import { Sport } from "./sport/sport.model";

export class Club {
  private _naam: string;
  private _locatie: string;
  private _prijs: number;
  private _sporten: Sport[];
   id: Number;

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
}

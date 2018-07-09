export class Club {
  private _naam: string;
  private _locatie: string;
  private _prijs: number;
  private _sporten = new Array<string>();

  constructor(naam: string) {
    this._naam = naam;
  }

  get naam(): string {
    return this._naam;
  }

  addSport(naam: string) {
    this._sporten.push(naam);
  }
}

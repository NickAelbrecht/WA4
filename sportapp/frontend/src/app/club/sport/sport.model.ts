export class Sport {
  private _id: string;
  private _naam: string;

  constructor(naam: string) {
    this._naam = naam;
  }

  get id(): string {
    return this._id;
  }
  get naam(): string {
    return this._naam;
  }
  set naam(naam: string) {
    this._naam = naam;
  }

  static fromJSON(json): Sport {
    const rec = new Sport(json.naam);
    rec._id = json._id;
    return rec;
  }

  toJSON() {
    return {
      _id: this._id,
      naam: this._naam
    };
  }
}

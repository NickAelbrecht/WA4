export class Sport {
  private _id: string;
  private _naam: string;

  static fromJSON(json): Sport {
    const sp = new Sport(json.naam);
    sp._id = json._id;
    return sp;
  }
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

  toJSON() {
    return {
      _id: this._id,
      naam: this._naam
    };
  }
}

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

  static fromJSON(json:any): Sport {
    const sp = new Sport(json.naam);
    sp._id = json._id;
    return sp;
  }

  toJSON() {
    return {
      _id: this._id,
      naam: this._naam
    };
  }
}

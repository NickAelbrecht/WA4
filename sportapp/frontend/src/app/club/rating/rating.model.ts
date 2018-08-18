export class Rating {
  private _id: string;
  private _rating: number;
  private _user: string;

  static fromJSON(json): Rating {
    const rating = new Rating(json.rating);
    rating._id = json._id;
    rating._user = json._user;
    return rating;
  }

  toJSON() {
    return {
      _id: this._id,
      _rating: this._rating,
      _user: this._user
    };
  }

  constructor(rate: number) {
    this._rating = rate;
  }

  get id(): string {
    return this._id;
  }

  get rating(): number {
    return this._rating;
  }
  get user(): string {
    return this._user;
  }
  set user(user: string) {
    this._user = user;
  }
}

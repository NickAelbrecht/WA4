export class Rating {
  private _id: string;
  private _rating: number;
  private _reviewer: string;

  static fromJSON(json): Rating {
    const rating = new Rating(json.rating);
    rating._id = json._id;
    rating._reviewer = json._reviewer;
    return rating;
  }

  toJSON() {
    return {
      _id: this._id,
      _rating: this._rating,
      _reviewer: this._reviewer
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
  get reviewer(): string {
    return this._reviewer;
  }
  set reviewer(review: string) {
    this._reviewer = review;
  }
}

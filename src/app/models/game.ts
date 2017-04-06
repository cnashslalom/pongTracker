export class Game {
  _id: string;
  a1: string;
  a2: string;
  b1: string;
  b2: string;
  a_score: string;
  b_score: string;
  doubles: string;
  created_user: string;
  verified_user: string;
  updated_user: string;
  location: string;
  created_at: Date;
  updated_at: Date;

  static asGame(json: any) {
      return new Game(json._id, json.a1, json.a2, json.b1, json.b2, 
        json.a_score, json.b_score, json.doubles, json.created_user, 
        json.verified_user, json.updated_user, json.location, json.created_at, 
        json.updated_at);
  }

  constructor(_id: string, a1: string, a2: string, b1: string, b2: string, 
    a_score: string, b_score: string, doubles: string, created_user: string, 
    verified_user: string, updated_user: string, location: string, 
    created_at: Date, updated_at: Date) {

    this._id = _id;
    this.a1 = a1;
    this.a2 = a2;
    this.b1 = b1;
    this.b2 = b2;
    this.a_score = a_score;
    this.b_score = b_score;
    this.doubles = doubles;
    this.created_user = created_user;
    this.verified_user = verified_user;
    this.updated_user = updated_user;
    this.location = location;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }
}


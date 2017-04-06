export class User {
    _id: string;
    username: string;
    password: string;
    admin: string;
    location: string;
    created_at: Date;
    updated_at: Date;

    static asUser(json: any) {
        return new User(json._id, json.username, json.password, json.admin, json.location, json.created_at, json.updated_at);
    }

    constructor(_id: string, username: string, password: string, admin: string, location: string, created_at: Date, updated_at: Date) {
      this._id = _id;
      this.username = username;
      this.password = password;
      this.admin = admin;
      this.location = location;
      this.created_at = created_at;
      this.updated_at = updated_at;
    }
}

export class User {
  constructor(
      public _id: String,
      public username: String,
      public name: String,
      public lastname: String,
      public about: String,
      public email: String,
      public password: String,
      public image: String,
      public role: String,
      public position: String,
      public phone: String,
      public country: String,
      public city: String,
      public gender: Number,
      public bornDate: String,
      public settings: String,
      public create_at: String,
      public last_login: String,
      public state: String,
      public cashback: string,
  ) { }
}

export class Authenticate {
constructor(
  public email: String,
  public password: String
) { }
}

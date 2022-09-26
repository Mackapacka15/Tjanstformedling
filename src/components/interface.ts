export class Listing {
  public name: String;
  public occupation: Array<String>;
  public aboutMe: String;
  public rating: Number;
  public userId?: String;

  constructor(
    name: String,
    occupation: Array<String>,
    aboutMe: String,
    rating: number,
    userId?: String
  ) {
    this.name = name;
    this.occupation = occupation;
    this.aboutMe = aboutMe;
    this.rating = rating;
    this.userId = userId;
  }
}

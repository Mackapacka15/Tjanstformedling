export class Person {
  public name: String;
  public occupation: Array<String>;
  public aboutMe: String;
  public rating: Number;

  constructor(
    name: String,
    occupation: Array<String>,
    aboutMe: String,
    rating: number
  ) {
    this.name = name;
    this.occupation = occupation;
    this.aboutMe = aboutMe;
    this.rating = rating;
  }
}

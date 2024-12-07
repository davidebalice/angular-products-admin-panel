export class User {
  public id: number;
  public name: string;
  public surname: string;
  public username: string;
  public phoneNumber: string;

  constructor(id: number, name: string, surname: string, username: string, phoneNumber: string) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.username = username;
    this.phoneNumber = phoneNumber;
  }
}

export interface UserDto {
  id: number;
  name: string;
  surname: string;
  username: string;
  phoneNumber: string;
}

export class Value {
  public id: number;
  public idAttribute: number;
  public name: string;
  public description: string;

  constructor(
    id: number,
    idAttribute: number,
    name: string,
    description: string
  ) {
    this.id = id;
    this.idAttribute = idAttribute;
    this.name = name;
    this.description = description;
  }
}

export interface ValueDto {
  id: number;
  idAttribute: number;
  name: string;
  description: string;
  bg: string;
  color: string;
}

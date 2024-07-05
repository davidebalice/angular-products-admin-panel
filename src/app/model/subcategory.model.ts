export class Subcategory {
  public id: number;
  public id_category: number;
  public name: string;
  public description: string;

  constructor(id: number, id_category: number, name: string, description: string) {
    this.id = id;
    this.id_category = id_category;
    this.name = name;
    this.description = description;
  }
}

export interface SubcategoryDto {
  id: number;
  id_category: number;
  name: string;
  description: string;
  bg: string;
  color: string;
}
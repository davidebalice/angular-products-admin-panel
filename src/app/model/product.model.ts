import { CategoryDto } from './category.model';

export class Product {
  public id: number;
  public title: string;
  public description: string;
  public imageUrl: string;
  public categoryDto: CategoryDto;
  public idCategory: number;

  constructor(
    id: number,
    title: string,
    description: string,
    idCategory: number,
    difficulty: number,
    imageUrl: string,
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.imageUrl = imageUrl;
    this.idCategory = idCategory;
  }
}

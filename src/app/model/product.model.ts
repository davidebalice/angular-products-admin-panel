import { CategoryDto } from './category.model';

export class Product {
  public id: number;
  public name: string;
  public sku: string;
  public description: string;
  public imageUrl: string;
  public categoryDto: CategoryDto;
  public idCategory: number;

  constructor(
    id: number,
    name: string,
    sku: string,
    description: string,
    idCategory: number,
    imageUrl: string,
  ) {
    this.id = id;
    this.name = name;
    this.sku = sku;
    this.description = description;
    this.imageUrl = imageUrl;
    this.idCategory = idCategory;
  }
}

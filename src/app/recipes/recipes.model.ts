// Because will use to define how data will be
import { Ingredient } from '../Models/ingredient.model';
export class Recipe {
  constructor(
    public name: string,
    public descripe: string,
    public imagePath: string,
    public ingred: Ingredient[]
  ) {}
}

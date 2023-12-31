import { Injectable } from '@angular/core';
import { Recipe } from './recipes.model';

@Injectable()
export class recipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'A Recipe',
      'This is Simply a Test',
      '../../../assets/recipe.jpg'
    ),
    new Recipe(
      'kkkk Recipe',
      'This is Simply a Test',
      '../../../assets/recipe.jpg'
    ),
  ];
  get Recipes() {
    return this.recipes.slice();
  }
}

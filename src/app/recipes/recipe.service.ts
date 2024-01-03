import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipes.model';
import { Ingredient } from '../Models/ingredient.model';

@Injectable()
export class recipeService {
  bringSelected = new EventEmitter<Recipe>();
  addIngredients = new EventEmitter<Ingredient[]>();
  private recipes: Recipe[] = [
    new Recipe(
      'A Recipe',
      'This is Simply a Test',
      '../../../assets/recipe.jpg',
      [new Ingredient('tomato', 5), new Ingredient('meat', 1)]
    ),
    new Recipe(
      'kkkk Recipe',
      'This is Simply a Test',
      '../../../assets/recipe.jpg',
      [new Ingredient('tomato', 5), new Ingredient('meat', 1)]
    ),
  ];
  get Recipes() {
    return this.recipes.slice();
  }
}

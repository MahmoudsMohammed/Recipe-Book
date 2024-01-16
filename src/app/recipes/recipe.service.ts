import { Injectable } from '@angular/core';
import { Recipe } from './recipes.model';
import { Ingredient } from '../Models/ingredient.model';

@Injectable({ providedIn: 'root' })
export class recipeService {
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
    return this.recipes;
  }
  set setRecipes(recipe: Recipe[]) {
    this.recipes = recipe;
  }
  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
  }
  newRecipe(newRecipe: Recipe) {
    this.recipes.push(newRecipe);
  }
}

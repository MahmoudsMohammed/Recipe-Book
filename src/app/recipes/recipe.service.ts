import { Injectable } from '@angular/core';
import { Recipe } from './recipes.model';

@Injectable({ providedIn: 'root' })
export class recipeService {
  private recipes: Recipe[] = [];
  get Recipes() {
    return this.recipes;
  }
  setRecipes(recipe: Recipe[]) {
    this.recipes.splice(0, this.recipes.length);
    this.recipes.push(...recipe);
  }
  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
  }
  newRecipe(newRecipe: Recipe) {
    this.recipes.push(newRecipe);
  }
}

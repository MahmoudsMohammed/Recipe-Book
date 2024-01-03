import { Injectable } from '@angular/core';
import { Ingredient } from '../Models/ingredient.model';
@Injectable({ providedIn: 'root' })
export class shoppingService {
  private ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Banana', 10),
  ];
  get getIngredients(): Ingredient[] {
    return this.ingredients;
  }
  set setIngredient(e) {
    this.ingredients.push(e);
  }
}

import { Injectable } from '@angular/core';
import { Ingredient } from '../Models/ingredient.model';
@Injectable()
export class shoppingService {
  private ingredients: Ingredient[] = [
    { name: 'Apple', amount: 5 },
    { name: 'Tomato', amount: 7 },
  ];
  get getIngredients(): Ingredient[] {
    return this.ingredients;
  }
  set setIngredient(e) {
    this.ingredients.push(e);
  }
}

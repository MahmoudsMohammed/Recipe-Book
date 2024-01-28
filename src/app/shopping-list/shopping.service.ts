import { Injectable } from '@angular/core';
import { Ingredient } from '../Models/ingredient.model';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class shoppingService {
  editItem = new Subject<number>();
  private ingredients: Ingredient[] = [];
  get getIngredients(): Ingredient[] {
    return this.ingredients;
  }
  set setShoppingList(list: Ingredient[]) {
    this.ingredients.splice(0, this.ingredients.length);
    this.ingredients.push(...list);
  }
  set setIngredient(e) {
    this.ingredients.push(e);
  }
}

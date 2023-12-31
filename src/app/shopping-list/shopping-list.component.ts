import { Component, Input } from '@angular/core';
import { Ingredient } from '../Models/ingredient.model';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css',
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    { name: 'Apple', amount: 5 },
    { name: 'Tomato', amount: 7 },
  ];
}

import { Component, Input, inject } from '@angular/core';
import { Recipe } from '../recipes.model';
import { shoppingService } from '../../shopping-list/shopping.service';
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css',
})
export class RecipeDetailComponent {
  private shoppingList: shoppingService;
  @Input() selectedRecpe: Recipe;
  constructor() {
    this.shoppingList = inject(shoppingService);
  }

  toShopping(e: Event) {
    this.selectedRecpe.ingred.forEach((el) => {
      this.shoppingList.setIngredient = el;
    });
    e.preventDefault();
  }
}

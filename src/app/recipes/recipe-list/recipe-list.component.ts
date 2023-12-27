import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent {
  // Create array of new instance of Recipe Class
  @Output() bringSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
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
  onGetSelected($e: Recipe) {
    this.bringSelected.emit($e);
  }
}

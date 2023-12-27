import { Component } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    {
      name: 'A Test Recipe',
      decripe: 'This is Simply a Test',
      imagePath: '../../../assets/recipe.jpg',
    },
    {
      name: 'A Test Recipe',
      decripe: 'This is Simply a Test',
      imagePath: '../../../assets/recipe.jpg',
    },
  ];
}

import { Component } from '@angular/core';
import { recipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css',
  providers: [recipeService],
})
export class RecipesComponent {}

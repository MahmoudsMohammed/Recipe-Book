import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../recipes.model';
import { recipeService } from '../../recipe.service';
@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css',
})
export class RecipeItemComponent {
  constructor(private recipeServ: recipeService) {}
  @Input() recipe: Recipe;
  ontoList() {
    this.recipeServ.bringSelected.emit(this.recipe);
  }
}

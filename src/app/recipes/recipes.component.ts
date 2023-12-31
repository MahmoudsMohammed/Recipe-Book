import { Component } from '@angular/core';
import { Recipe } from './recipes.model';
import { recipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css',
  providers: [recipeService],
})
export class RecipesComponent {
  selectedRecpe: Recipe;
  constructor(private recipeServ: recipeService) {}
  ngOnInit(): void {
    this.recipeServ.bringSelected.subscribe((e) => {
      this.selectedRecpe = e;
    });}
}

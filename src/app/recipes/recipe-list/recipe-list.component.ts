import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipes.model';
import { recipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent implements OnInit {
  constructor(private recipeServ: recipeService) {}
  recipes: Recipe[] = [];
  ngOnInit(): void {
    this.recipes = this.recipeServ.Recipes;
  }
}

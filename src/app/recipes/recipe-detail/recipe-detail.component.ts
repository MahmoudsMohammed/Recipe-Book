import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css',
})
export class RecipeDetailComponent {
  @Input() selectedRecpe: Recipe;
}

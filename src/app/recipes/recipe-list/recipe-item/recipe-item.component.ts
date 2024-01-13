import { Component, Input } from '@angular/core';
import { Recipe } from '../../recipes.model';
import { recipeService } from '../../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css',
})
export class RecipeItemComponent {
  constructor(
    private recipeServ: recipeService,
    private router: Router,
    private actRoute: ActivatedRoute
  ) {}
  @Input() recipe: Recipe;
  @Input() index: number;
}

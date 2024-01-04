import { Component, OnInit, inject } from '@angular/core';
import { Recipe } from '../recipes.model';
import { shoppingService } from '../../shopping-list/shopping.service';
import { recipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css',
})
export class RecipeDetailComponent implements OnInit {
  private shoppingList: shoppingService;
  private recService: recipeService;
  selectedRecpe: Recipe;
  constructor(private route: Router, private curRoute: ActivatedRoute) {
    this.recService = inject(recipeService);
    this.shoppingList = inject(shoppingService);
  }
  ngOnInit(): void {
    this.curRoute.params.subscribe((e: Params) => {
      this.selectedRecpe = this.recService.Recipes[+`${e['id']}`];
    });
  }
  // add ingredient to shopping service
  toShopping(e: Event) {
    this.selectedRecpe.ingred.forEach((el) => {
      this.shoppingList.setIngredient = el;
    });
    e.preventDefault();
  }
}

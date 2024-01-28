import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { recipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipes.model';
import { map, tap } from 'rxjs/operators';
import { shoppingService } from '../shopping-list/shopping.service';
import { Ingredient } from '../Models/ingredient.model';

@Injectable({ providedIn: 'root' })
export class httpService {
  constructor(
    private http: HttpClient,
    private recipeServ: recipeService,
    private shoppingServ: shoppingService
  ) {}
  // sent data
  sendData() {
    // sent recipes Data
    this.http
      .put<Recipe[]>(
        'https://recipe-book-4a739-default-rtdb.firebaseio.com/recipe.json',
        this.recipeServ.Recipes
      )
      .subscribe((res) => {
        console.log(res);
      });
    // sent shopping list Data
    this.http
      .put<Ingredient[]>(
        'https://recipe-book-4a739-default-rtdb.firebaseio.com/shopping.json',
        this.shoppingServ.getIngredients
      )
      .subscribe((res) => {
        console.log(res);
      });
  }

  // fetch recipes Data
  fetchData() {
    return this.http
      .get<Recipe[]>(
        'https://recipe-book-4a739-default-rtdb.firebaseio.com/recipe.json'
      )
      .pipe(
        map((res) => {
          return res.map((e) => {
            return { ...e, ingred: e.ingred ? e.ingred : [] };
          });
        }),
        tap((res) => {
          this.recipeServ.setRecipes(res);
        })
      );
  }

  // fetch shopping List Data
  fetchShopping() {
    return this.http
      .get<Ingredient[]>(
        'https://recipe-book-4a739-default-rtdb.firebaseio.com/shopping.json'
      )
      .pipe(
        tap((res) => {
          if (res) {
            this.shoppingServ.setShoppingList = res;
          }
        })
      );
  }
}

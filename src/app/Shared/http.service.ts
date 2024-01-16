import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { recipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipes.model';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class httpService {
  constructor(private http: HttpClient, private recipeServ: recipeService) {}
  sendData() {
    this.http
      .put<Recipe[]>(
        'https://recipe-book-4a739-default-rtdb.firebaseio.com/recipe.json',
        this.recipeServ.Recipes
      )
      .subscribe((res) => {
        console.log(res);
      });
  }
  fetchData() {
    this.http
      .get<Recipe[]>(
        'https://recipe-book-4a739-default-rtdb.firebaseio.com/recipe.json'
      )
      .pipe(
        map((res) => {
          return res.map((e) => {
            return { ...e, ingred: e.ingred ? e.ingred : [] };
          });
        })
      )
      .subscribe((res) => {
        this.recipeServ.setRecipes(res);
        console.log(res);
      });
  }
}

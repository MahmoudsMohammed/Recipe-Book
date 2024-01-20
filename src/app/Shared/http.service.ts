import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { recipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipes.model';
import { exhaustMap, map, take, tap } from 'rxjs/operators';
import { authService } from '../auth/auth.http.service';

@Injectable({ providedIn: 'root' })
export class httpService {
  constructor(
    private http: HttpClient,
    private recipeServ: recipeService,
    private authServ: authService
  ) {}
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
}

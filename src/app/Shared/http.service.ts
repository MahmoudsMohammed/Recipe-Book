import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { recipeService } from '../recipes/recipe.service';

@Injectable({ providedIn: 'root' })
export class httpService {
  constructor(private http: HttpClient, private recipeServ: recipeService) {}
  sendData() {
    this.http
      .put(
        'https://recipe-book-4a739-default-rtdb.firebaseio.com/recipe.json',
        this.recipeServ.Recipes
      )
      .subscribe((res) => {
        console.log(res);
      });
  }
}

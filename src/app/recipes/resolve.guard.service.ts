import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Recipe } from './recipes.model';
import { Observable } from 'rxjs';
import { recipeService } from './recipe.service';
import { httpService } from '../Shared/http.service';

@Injectable({ providedIn: 'root' })
export class recipeRecolverGuard implements Resolve<Recipe[]> {
  constructor(private recipeServ: recipeService, private http: httpService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Recipe[] | Observable<Recipe[]> | Promise<Recipe[]> {
    if (this.recipeServ.Recipes.length === 0) {
      return this.http.fetchData();
    } else {
      return this.recipeServ.Recipes;
    }
  }
}

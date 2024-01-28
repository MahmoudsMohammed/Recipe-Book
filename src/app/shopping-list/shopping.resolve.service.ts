import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Ingredient } from '../Models/ingredient.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { shoppingService } from './shopping.service';
import { httpService } from '../Shared/http.service';

@Injectable({ providedIn: 'root' })
export class shoppingResolver implements Resolve<Ingredient[]> {
  constructor(
    private shoppingServ: shoppingService,
    private httpServ: httpService
  ) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Ingredient[] | Observable<Ingredient[]> | Promise<Ingredient[]> {
    if (this.shoppingServ.getIngredients.length === 0) {
      return this.httpServ.fetchShopping();
    }
  }
}

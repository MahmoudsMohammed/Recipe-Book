import { AfterViewChecked, Component, Input, OnInit } from '@angular/core';
import { Ingredient } from '../Models/ingredient.model';
import { shoppingService } from './shopping.service';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css',
  providers: [shoppingService],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];
  constructor(private shoppingServ: shoppingService) {}
  ngOnInit(): void {
    this.ingredients = this.shoppingServ.getIngredients;
  }
}

import {
  AfterViewChecked,
  Component,
  Input,
  OnInit,
  inject,
} from '@angular/core';
import { Ingredient } from '../Models/ingredient.model';
import { shoppingService } from './shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css',
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];
  private shoppingServ: shoppingService;
  constructor() {
    this.shoppingServ = inject(shoppingService);
  }
  ngOnInit(): void {
    this.ingredients = this.shoppingServ.getIngredients;
  }
  onEdit(index: number) {
    this.shoppingServ.editItem.next(index);
  }
}

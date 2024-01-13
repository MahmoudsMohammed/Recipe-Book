import { Component } from '@angular/core';
import { Ingredient } from '../../Models/ingredient.model';
import { shoppingService } from '../shopping.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shoping-edit',
  templateUrl: './shoping-edit.component.html',
  styleUrl: './shoping-edit.component.css',
})
export class ShopingEditComponent {
  constructor(private shoppingServ: shoppingService) {}

  onAddIngredient(form: NgForm) {
    const value = form.value;
    this.shoppingServ.setIngredient = new Ingredient(value.name, +value.amount);
  }
}

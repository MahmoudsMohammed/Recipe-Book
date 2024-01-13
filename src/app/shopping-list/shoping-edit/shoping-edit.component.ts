import { Component, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from '../../Models/ingredient.model';
import { shoppingService } from '../shopping.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shoping-edit',
  templateUrl: './shoping-edit.component.html',
  styleUrl: './shoping-edit.component.css',
})
export class ShopingEditComponent implements OnInit {
  // { static: false } important because will use at ngOnInit
  @ViewChild('form', { static: false }) form;
  constructor(private shoppingServ: shoppingService) {}

  ngOnInit(): void {
    this.shoppingServ.editItem.subscribe((index) => {
      this.form.setValue({
        name: this.shoppingServ.getIngredients[index].name,
        amount: this.shoppingServ.getIngredients[index].amount,
      });
    });
  }

  onAddIngredient(form: NgForm) {
    const value = form.value;
    this.shoppingServ.setIngredient = new Ingredient(value.name, +value.amount);
    form.reset();
  }
}

import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from '../../Models/ingredient.model';
import { shoppingService } from '../shopping.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shoping-edit',
  templateUrl: './shoping-edit.component.html',
  styleUrl: './shoping-edit.component.css',
})
export class ShopingEditComponent implements OnInit, OnDestroy {
  // { static: false } important because will use at ngOnInit
  @ViewChild('form', { static: false }) form;
  editSubscribe: Subscription;
  editMode = false;
  itemEdit: Ingredient;
  itemEditIndex: number;
  constructor(private shoppingServ: shoppingService) {}

  ngOnInit(): void {
    this.editSubscribe = this.shoppingServ.editItem.subscribe((index) => {
      this.itemEditIndex = index;
      this.editMode = true;
      this.itemEdit = this.shoppingServ.getIngredients[index];
      this.form.setValue({
        name: this.itemEdit.name,
        amount: this.itemEdit.amount,
      });
    });
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    if (this.editMode) {
      this.shoppingServ.getIngredients[this.itemEditIndex] = value;
      this.editMode = false;
    } else {
      this.shoppingServ.setIngredient = new Ingredient(
        value.name,
        +value.amount
      );
    }
    form.reset();
  }
  // handle clear button
  onClear() {
    this.form.reset();
    this.editMode = false;
  }
  // handle delete button
  onDelete() {
    this.shoppingServ.getIngredients.splice(this.itemEditIndex, 1);
    this.onClear();
  }
  ngOnDestroy(): void {
    // avoid memory leak
    this.editSubscribe.unsubscribe();
  }
}

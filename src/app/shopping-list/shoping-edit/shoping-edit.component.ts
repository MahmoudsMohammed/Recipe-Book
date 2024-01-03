import {
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { Ingredient } from '../../Models/ingredient.model';
import { shoppingService } from '../shopping.service';

@Component({
  selector: 'app-shoping-edit',
  templateUrl: './shoping-edit.component.html',
  styleUrl: './shoping-edit.component.css',
})
export class ShopingEditComponent {
  constructor(private shoppingServ: shoppingService) {}
  @ViewChild('nameInput') $nam: ElementRef;
  @ViewChild('amountInput') $amountInput: ElementRef;

  onAddIngredient($e: Event) {
    this.shoppingServ.setIngredient = new Ingredient(
      this.$nam.nativeElement.value,
      +this.$amountInput.nativeElement.value
    );
    $e.preventDefault();
  }
}

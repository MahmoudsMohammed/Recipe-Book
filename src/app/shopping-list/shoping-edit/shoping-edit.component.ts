import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shoping-edit',
  templateUrl: './shoping-edit.component.html',
  styleUrl: './shoping-edit.component.css',
})
export class ShopingEditComponent {
  @ViewChild('nameInput') $nam: ElementRef;
  @ViewChild('amountInput') $amountInput: ElementRef;
  @Output() addIngredient = new EventEmitter<Ingredient>();

  onAddIngredient($e: Event) {
    this.addIngredient.emit(
      new Ingredient(
        this.$nam.nativeElement.value,
        +this.$amountInput.nativeElement.value
      )
    );
    $e.preventDefault();
  }
}

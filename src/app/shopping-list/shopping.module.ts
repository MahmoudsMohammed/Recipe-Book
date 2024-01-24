import { NgModule } from '@angular/core';
import { ShopingEditComponent } from './shoping-edit/shoping-edit.component';
import { ShoppingListComponent } from './shopping-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { sharedModule } from '../Shared/shared.module';

@NgModule({
  declarations: [ShopingEditComponent, ShoppingListComponent],
  imports: [
    sharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: ShoppingListComponent,
      },
    ]),
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class shoppingModule {}

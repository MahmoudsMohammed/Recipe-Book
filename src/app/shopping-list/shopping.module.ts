import { NgModule } from '@angular/core';
import { ShopingEditComponent } from './shoping-edit/shoping-edit.component';
import { ShoppingListComponent } from './shopping-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { sharedModule } from '../Shared/shared.module';
import { authGuard } from '../auth/auth.service.guard';
import { shoppingResolver } from './shopping.resolve.service';

@NgModule({
  declarations: [ShopingEditComponent, ShoppingListComponent],
  imports: [
    sharedModule,
    RouterModule.forChild([
      {
        canActivate:[authGuard],
        path: '',
        component: ShoppingListComponent,
        resolve:[shoppingResolver],
      },
    ]),
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class shoppingModule {}

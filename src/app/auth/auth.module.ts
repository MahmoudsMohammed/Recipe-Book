import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { authComponent } from './auth.component';
import { RouterModule } from '@angular/router';
import { sharedModule } from '../Shared/shared.module';

@NgModule({
  declarations: [authComponent],
  imports: [
    sharedModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: authComponent }]),
  ],
})
export class authModule {}

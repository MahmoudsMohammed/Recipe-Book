import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authComponent } from './auth/auth.component';
const routes: Routes = [
  { path: '', redirectTo: '/recipe', pathMatch: 'full' },
  { path: 'auth', component: authComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

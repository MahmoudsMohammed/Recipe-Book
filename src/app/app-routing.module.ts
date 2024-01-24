import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/recipe', pathMatch: 'full' },
  {
    path: 'recipe',
    loadChildren: () =>
      import('./recipes/recipe.module').then((m) => m.recipeModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/recipe', pathMatch: 'full' },
  {
    path: 'recipe',
    loadChildren: () =>
      import('./recipes/recipe.module').then((m) => m.recipeModule),
  },
  {
    path: 'shopping',
    loadChildren: () =>
      import('./shopping-list/shopping.module').then((m) => m.shoppingModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.authModule),
  },
  {
    path: '**',
    redirectTo: 'recipe',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

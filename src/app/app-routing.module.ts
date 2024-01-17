import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { NewRecipeComponent } from './recipes/new-recipe/new-recipe.component';
import { recipeRecolverGuard } from './recipes/resolve.guard.service';
import { authComponent } from './auth/auth.component';

const routes: Routes = [
  { path: '', redirectTo: '/recipe', pathMatch: 'full' },
  {
    path: 'recipe',
    component: RecipesComponent,
    children: [
      { path: '', component: RecipeStartComponent },
      { path: 'new', component: NewRecipeComponent },
      {
        path: ':id',
        component: RecipeDetailComponent,
        resolve: [recipeRecolverGuard],
      },
      {
        path: ':id/edit',
        component: NewRecipeComponent,
        resolve: [recipeRecolverGuard],
      },
    ],
  },
  { path: 'shopping', component: ShoppingListComponent },
  { path: 'auth', component: authComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

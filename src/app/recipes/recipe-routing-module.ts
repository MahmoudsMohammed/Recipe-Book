import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from '../auth/auth.service.guard';
import { NewRecipeComponent } from './new-recipe/new-recipe.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipesComponent } from './recipes.component';
import { recipeRecolverGuard } from './resolve.guard.service';

const root: Routes = [
  {
    path: '',
    canActivate: [authGuard],
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
];

@NgModule({
  imports: [RouterModule.forChild(root)],
  exports: [RouterModule],
})
export class recipeRoutingModule {}

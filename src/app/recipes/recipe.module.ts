import { NgModule } from '@angular/core';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipesComponent } from './recipes.component';
import { NewRecipeComponent } from './new-recipe/new-recipe.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { recipeRoutingModule } from './recipe-routing-module';
import { sharedModule } from '../Shared/shared.module';

@NgModule({
  declarations: [
    RecipesComponent,
    RecipeDetailComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeStartComponent,
    NewRecipeComponent,
  ],
  imports: [
    sharedModule,
    FormsModule,
    ReactiveFormsModule,
    recipeRoutingModule,
  ],
})
export class recipeModule {}

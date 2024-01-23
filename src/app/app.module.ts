import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShopingEditComponent } from './shopping-list/shoping-edit/shoping-edit.component';
import { openDropDown } from './Directives/openDropdown.directive';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { NewRecipeComponent } from './recipes/new-recipe/new-recipe.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { authComponent } from './auth/auth.component';
import { spinnerComponent } from './Shared/spinner/spinner-component';
import { authInterceptor } from './auth/auth.interceptor.service';
import { alertComponent } from './Shared/alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    ShoppingListComponent,
    RecipeDetailComponent,
    RecipeListComponent,
    RecipeItemComponent,
    ShopingEditComponent,
    openDropDown,
    RecipeStartComponent,
    NewRecipeComponent,
    authComponent,
    spinnerComponent,
    alertComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: authInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { authComponent } from './auth/auth.component';
import { recipeModule } from './recipes/recipe.module';
import { shoppingModule } from './shopping-list/shopping.module';
import { sharedModule } from './Shared/shared.module';
import { coreModule } from './core.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent, authComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    recipeModule,
    shoppingModule,
    sharedModule,
    coreModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

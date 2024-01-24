import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { authComponent } from './auth/auth.component';
import { authInterceptor } from './auth/auth.interceptor.service';
import { recipeModule } from './recipes/recipe.module';
import { shoppingModule } from './shopping-list/shopping.module';
import { sharedModule } from './Shared/shared.module';

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
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: authInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

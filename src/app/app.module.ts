import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShopingEditComponent } from './shopping-list/shoping-edit/shoping-edit.component';
import { openDropDown } from './Directives/openDropdown.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { authComponent } from './auth/auth.component';
import { spinnerComponent } from './Shared/spinner/spinner-component';
import { authInterceptor } from './auth/auth.interceptor.service';
import { alertComponent } from './Shared/alert/alert.component';
import { helperDirective } from './Shared/helper.directive';
import { recipeModule } from './recipes/recipe.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShopingEditComponent,
    openDropDown,
    authComponent,
    spinnerComponent,
    alertComponent,
    helperDirective,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    recipeModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: authInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

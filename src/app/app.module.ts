import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { shoppingModule } from './shopping-list/shopping.module';
import { sharedModule } from './Shared/shared.module';
import { coreModule } from './core.module';
import { authModule } from './auth/auth.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    shoppingModule,
    sharedModule,
    coreModule,
    authModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

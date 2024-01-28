import { Component, OnDestroy, OnInit } from '@angular/core';
import { httpService } from '../Shared/http.service';
import { authService } from '../auth/auth.http.service';
import { Subscription } from 'rxjs';
import { recipeService } from '../recipes/recipe.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit, OnDestroy {
  constructor(
    private httpServ: httpService,
    private authServ: authService,
    private recipeServ: recipeService
  ) {}
  sub: Subscription;
  isAuth = false;
  addFirst = false;

  ngOnInit(): void {
    this.sub = this.authServ.userSub.subscribe((user) => {
      this.isAuth = Boolean(user);
    });
  }
  onSaveData() {
    if (this.recipeServ.Recipes.length !== 0) {
      this.httpServ.sendData();
    } else {
      this.addFirst = true;
    }
  }
  onFetchData() {
    this.httpServ.fetchData().subscribe();
    this.httpServ.fetchShopping().subscribe();
  }
  onClick() {
    this.authServ.logout();
  }
  onCloseAlert() {
    this.addFirst = false;
  }
  ngOnDestroy(): void {
    // avoid memory leak
    this.sub.unsubscribe();
  }
}

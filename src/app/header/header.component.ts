import { Component, OnDestroy, OnInit } from '@angular/core';
import { httpService } from '../Shared/http.service';
import { authService } from '../auth/auth.http.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit, OnDestroy {
  constructor(private httpServ: httpService, private authServ: authService) {}
  sub: Subscription;
  isAuth = false;
  ngOnInit(): void {
    this.sub = this.authServ.userSub.subscribe((user) => {
      this.isAuth = Boolean(user);
    });
  }
  onSaveData() {
    this.httpServ.sendData();
  }
  onFetchData() {
    this.httpServ.fetchData().subscribe();
  }
  onClick() {
    this.authServ.logout();
  }
  ngOnDestroy(): void {
    // avoid memory leak
    this.sub.unsubscribe();
  }
}

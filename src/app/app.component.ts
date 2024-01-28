import { Component, OnDestroy, OnInit } from '@angular/core';
import { authService } from './auth/auth.http.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'Recipe-Book';
  constructor(private authHttp: authService) {}
  ngOnInit(): void {
    this.authHttp.autoLogin();
  }
}

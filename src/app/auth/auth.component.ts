import { Component } from '@angular/core';

@Component({
  selector: 'auth',
  templateUrl: './auth.component.html',
})
export class authComponent {
  login = true;
  onSwitchMode() {
    this.login = !this.login;
  }
}

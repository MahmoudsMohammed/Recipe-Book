import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'auth',
  templateUrl: './auth.component.html',
})
export class authComponent {
  login = true;
  onSwitchMode() {
    this.login = !this.login;
  }
  onSubmit(form: NgForm) {
    form.reset();
  }
}

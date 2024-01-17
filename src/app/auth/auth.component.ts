import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { authService, authResponse } from './auth.http.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'auth',
  templateUrl: './auth.component.html',
})
export class authComponent {
  constructor(private authServ: authService) {}
  login = true;
  isloading = false;
  error: string = null;
  onSwitchMode() {
    this.login = !this.login;
  }
  onSubmit(form: NgForm) {
    // additional check
    if (!form.valid) {
      return;
    }
    // get data from the form
    const email = form.value.email,
      password = form.value.password;

    let obser: Observable<authResponse>;
    // make signup or login method based on the mood
    if (this.login) {
      this.isloading = true;
      obser = this.authServ.login(email, password);
    } else {
      this.isloading = true;
      obser = this.authServ.signUp(email, password);
    }
    obser.subscribe(
      (response) => {
        console.log(response);
        this.isloading = false;
      },
      (errorMessage) => {
        this.error = errorMessage;
        this.isloading = false;
        console.log(errorMessage);
      }
    );
    form.reset();
  }
}

import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { authService } from './auth.http.service';

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
    // make signup or login method based on the mood
    if (this.login) {
    } else {
      this.isloading = true;
      const email = form.value.email,
        password = form.value.password;
      this.authServ.signUp(email, password).subscribe(
        (response) => {
          console.log(response);
          this.isloading = false;
        },
        (errorMessage) => {
          this.error = errorMessage;
          this.isloading = false;
        }
      );
    }
    form.reset();
  }
}

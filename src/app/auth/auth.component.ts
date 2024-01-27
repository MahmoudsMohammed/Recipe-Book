import {
  Component,
  ComponentFactoryResolver,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { authService, authResponse } from './auth.http.service';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { alertComponent } from '../Shared/alert/alert.component';
import { helperDirective } from '../Shared/helper.directive';

@Component({
  selector: 'auth',
  templateUrl: './auth.component.html',
})
export class authComponent implements OnDestroy {
  constructor(
    private authServ: authService,
    private router: Router,
    private cFactoryResolver: ComponentFactoryResolver
  ) {}
  login = true;
  isloading = false;
  error: string = null;
  closeSub: Subscription;
  // reference for first type of this directive in the template
  @ViewChild(helperDirective) viewRefe: helperDirective;
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
        this.router.navigate(['/recipe']);
        this.isloading = false;
      },
      (errorMessage) => {
        this.error = errorMessage;
        this.showAlertComponent(errorMessage);
        this.isloading = false;
      }
    );
    form.reset();
  }
  // reset the error to remove error component
  onErrorHandel() {
    this.error = null;
  }
  showAlertComponent(message: string) {
    // return component factory
    const cFactory =
      this.cFactoryResolver.resolveComponentFactory(alertComponent);
    // clear the place before create the component
    this.viewRefe.viewContainer.clear();
    // use the component factory to create component
    const comRef = this.viewRefe.viewContainer.createComponent(cFactory);
    // use component instance to make property bind
    comRef.instance.message = message;
    this.closeSub = comRef.instance.close.subscribe(() => {
      this.closeSub.unsubscribe();
      this.viewRefe.viewContainer.clear();
    });
  }
  ngOnDestroy(): void {
    if (this.closeSub) {
      this.closeSub.unsubscribe();
    }
  }
}

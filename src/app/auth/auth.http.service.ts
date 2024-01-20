import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError, tap, BehaviorSubject } from 'rxjs';
import { user } from './user.model';
import { Router } from '@angular/router';

export interface authResponse {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({ providedIn: 'root' })
export class authService {
  constructor(private http: HttpClient, private router: Router) {}
  userSub = new BehaviorSubject<user>(null);

  autoLogin() {
    // create user from user data store at LS
    const lsUser: {
      email: string;
      id: string;
      _token: string;
      _expiresIn: Date;
    } = JSON.parse(localStorage.getItem('userData'));
    // check if there is now login user
    if (!lsUser) {
      return;
    }
    const newUser = new user(
      lsUser.email,
      lsUser.id,
      lsUser._token,
      lsUser._expiresIn
    );
    // Check if token still valid or not if valid emmit user
    if (newUser.token) {
      this.userSub.next(newUser);
    }
  }

  signUp(email: string, password: string) {
    return this.http
      .post<authResponse>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA144PCKJ3_8431NPBmEgmrFO94e_5eKC0',
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      )
      .pipe(
        catchError(this.httpErrorHandle),
        tap((res) => {
          this.createUser(res.email, res.localId, res.idToken, res.expiresIn);
        })
      );
  }

  login(email: string, password: string) {
    return this.http
      .post<authResponse>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA144PCKJ3_8431NPBmEgmrFO94e_5eKC0',
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      )
      .pipe(
        catchError(this.httpErrorHandle),
        // create user
        tap((res) => {
          this.createUser(res.email, res.localId, res.idToken, res.expiresIn);
        })
      );
  }
  // Private Method Which Handle Errors at Requests
  private httpErrorHandle(error: HttpErrorResponse) {
    let message: string;
    if (!error.error.error) {
      message = 'An unkown error occured !';
    } else {
      switch (error.error.error.message) {
        case 'EMAIL_EXISTS':
          message = 'This email exists already';
          break;
        case 'EMAIL_NOT_FOUND':
          message = 'This email does not exist';
          break;
        case 'INVALID_PASSWORD':
          message = 'This password is not correct';
          break;
        case 'INVALID_LOGIN_CREDENTIALS':
          message = 'Invalid login Data';
          break;
      }
    }
    return throwError(message);
  }

  logout() {
    this.userSub.next(null);
    this.router.navigate(['/auth']);
  }

  // Create User
  private createUser(
    email: string,
    id: string,
    token: string,
    expiresIn: string | Date
  ) {
    expiresIn = new Date(new Date().getTime() + +expiresIn * 1000);
    const newUser = new user(email, id, token, expiresIn);
    this.userSub.next(newUser);
    localStorage.setItem('userData', JSON.stringify(newUser));
  }
}

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

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
  constructor(private http: HttpClient) {}
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
      .pipe(catchError(this.httpErrorHandle));
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
      .pipe(catchError(this.httpErrorHandle));
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
}

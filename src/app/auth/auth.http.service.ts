import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface authResponse {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}

@Injectable({ providedIn: 'root' })
export class authService {
  constructor(private http: HttpClient) {}
  signUp(email: string, password: string) {
    return this.http.post<authResponse>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA144PCKJ3_8431NPBmEgmrFO94e_5eKC0',
      {
        email: email,
        password: password,
        returnSecureToken: true,
      }
    );
  }
}

import {
  HttpHandler,
  HttpInterceptor,
  HttpParams,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, exhaustMap, take } from 'rxjs';
import { authService } from './auth.http.service';

@Injectable()
export class authInterceptor implements HttpInterceptor {
  constructor(private authServ: authService) {}
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return this.authServ.userSub.pipe(
      take(1),
      exhaustMap((user) => {
        if (!user) {
          return next.handle(req);
        } else {
          const modifiy = req.clone({
            params: new HttpParams().set('auth', user.token),
          });
          return next.handle(modifiy);
        }
      })
    );
  }
}

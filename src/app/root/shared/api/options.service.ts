import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { Observable, throwError } from 'rxjs';

import { ApiService } from './api.service';
import { AuthService } from 'src/app/root/shared/auth/auth.service';
import { UserInfo } from '../models/user-info';

@Injectable()
export class OptionsService implements HttpInterceptor {

  constructor(private apiService: ApiService, private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
    const storage = JSON.parse(localStorage.getItem('auth'));
    const authReq = req.clone({
      headers: req.headers.set('Authorization',(storage && storage.token || ''))
    });
    this.apiService.loading$.next(true);
    return next.handle(authReq).pipe(
      map((resp: any) => {
        if (resp instanceof HttpResponse) {
          const autorization = !resp.body && resp.headers.get('Authorization');
          const refresh = !resp.body && resp.headers.get('Refresh');
          autorization && this.authService.setAuth(new UserInfo(autorization, refresh));
          this.apiService.loading$.next(false);
        }
        return resp;
      }),
      catchError((err: any) => {
        if (err instanceof HttpErrorResponse) {
          this.apiService.loading$.next(false);
        }
        return throwError(err);
      })
    );
  }
}

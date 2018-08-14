import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { User } from '../models/user';
import { UserInfo } from '../models/user-info';
import { CommonAction } from './common-action';
import { SIGN, LogIn } from './auth-store';

@Injectable()
export class AuthEffects {

  @Effect() logIn$: Observable<Action> = this.actions$.pipe(
    ofType(SIGN),
    switchMap((userAction: CommonAction<User>) => this.authService.logIn(userAction).pipe(
      map((data: any) => {
        const authorization = data.headers.get('authorization');
        const refresh = data.headers.get('refresh');
        return new LogIn(new UserInfo(authorization, refresh));
      })
    )
    )
  );

  constructor(private actions$: Actions, private authService: AuthService) { }
}

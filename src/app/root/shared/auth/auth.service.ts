import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api/api.service';
import { UserInfo } from '../models/user-info';
import { CommonAction } from '../store/common-action';
import { User } from '../models/user';
import { Store } from '@ngrx/store';
import { LogOut, LogIn } from '../store/auth-store';

@Injectable()
export class AuthService {
  isLogged = false;

  constructor(private api: ApiService, private router: Router, private store: Store<any>) {
    this.store.dispatch(new LogIn(JSON.parse(localStorage.getItem('auth'))));
    this.store.select('auth').subscribe((user: UserInfo) => {
      if (user) {
        this.isLogged = true;
        this.router.navigate(['supplier']);
      } else {
        this.isLogged = false;
        this.router.navigate(['login']);
      }
    });
  }

  public logIn(userAction: CommonAction<User>): any {
    return this.api.post('/admin/auth/signin', userAction.payload, { observe: 'response' });
  }

  public logout(): void {
    this.store.dispatch(new LogOut());
  }
}

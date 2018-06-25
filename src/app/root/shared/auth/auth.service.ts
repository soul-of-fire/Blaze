import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as shajs from 'sha.js';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiService } from '../api/api.service';
import { UserInfo } from '../models/user-info';
import { CommonAction } from '../store/common-action';
import { User } from '../models/user';

@Injectable()
export class AuthService {
  public user$ = new BehaviorSubject<any>(null);
  isLogged = false;

  constructor(private api: ApiService, private router: Router) {
    this.loginListener();
  }

  public logIn(userAction: CommonAction<User>): Observable<any> {
    this.hashPassword(userAction.payload);
    return this.api.post('/sign', userAction.payload);
  }

  public logout(): void {
    this.user$.next(null);
    localStorage.removeItem('auth');
  }
  
  public setAuth(userInfo: UserInfo) {
    this.user$.next(userInfo);
    localStorage.setItem('auth', JSON.stringify(userInfo));
    this.router.navigate(['transport']);
  }

  private loginListener(): void {
    this.user$.next(JSON.parse(localStorage.getItem('auth')));
    this.user$.subscribe((user: any) => {
      if (!user) {
        this.isLogged = false;
        this.router.navigate(['login']);
      }else{
        this.isLogged = true;
      }
    });
  }

  private hashPassword(payload: User): void {
    payload.password = shajs('sha256').update(payload.password).digest('hex');
  }
}

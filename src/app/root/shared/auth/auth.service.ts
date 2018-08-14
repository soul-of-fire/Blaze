import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from '../api/api.service';
import { UserInfo } from '../models/user-info';
import { CommonAction } from '../store/common-action';
import { User } from '../models/user';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class AuthService {
  public user$ = new BehaviorSubject<any>(null);
  isLogged = false;

  constructor(private api: ApiService, private router: Router) {
    this.loginListener();
  }

  public logIn(userAction: CommonAction<User>): any {
    return this.api.post('/admin/auth/signin', userAction.payload);
  }

  public logout(): void {
    this.user$.next(null);
    localStorage.removeItem('auth');
  }
  
  public setAuth(userInfo: UserInfo) {
    this.user$.next(userInfo);
    localStorage.setItem('auth', JSON.stringify(userInfo));
    this.router.navigate(['supplier']);
  }

  private loginListener(): void {
    this.user$.next(JSON.parse(localStorage.getItem('auth')));
    this.user$.subscribe((user: any) => {
      if (!user) {
        this.isLogged = false;
        this.router.navigate(['login']);
      }else{
        this.isLogged = true;
        // this.refreshOnExpire(user);
      }
    });
  }
  
  private refreshOnExpire(userInfo: UserInfo) {
    const now = new Date().getTime();
    const authExpire = userInfo.expAuthorization - now; // 10000
    const refExpire = userInfo.expRefresh - now; // 29000
    setTimeout(() => {
      if(this.isLogged) {
        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type':  'application/json',
            'Authorization': userInfo.token,
            'Refresh': userInfo.refresh
          })
        };
        this.api.post('/admin/auth/refresh-access-token', null, httpOptions).subscribe();
      }
    }, authExpire);
    setTimeout(() => {
      if(this.isLogged) {
        this.logout();
      }
    }, refExpire);
  }
}

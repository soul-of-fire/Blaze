import { cloneDeep } from 'lodash';
import { CommonAction } from '../../../root/shared/store/common-action';
import { User } from '../models/user';
import { UserInfo } from '../models/user-info';

export const SIGN = 'SIGN';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export class Sign extends CommonAction<User> {
  type = SIGN;
}

export class LogIn extends CommonAction<UserInfo> {
  type = LOGIN;
}

export class LogOut extends CommonAction<void> {
  type = LOGOUT;
}

export function authReducer(auth: UserInfo = null, action: CommonAction<UserInfo>) {
  switch (action.type) {
    case LOGIN:
      const user = action.payload;
      localStorage.setItem('auth', JSON.stringify(user));
      return user;
    case LOGOUT:
      localStorage.removeItem('auth');
      return null;
    default:
      return auth;
  }
}

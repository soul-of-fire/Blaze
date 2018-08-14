import { cloneDeep } from 'lodash';
import { CommonAction } from '../../../root/shared/store/common-action';
import { User } from '../models/user';
import { UserInfo } from '../models/user-info';

export const LOG_IN = 'LOG_IN';
export const LOGGED = 'LOGGED';

export class LogIn extends CommonAction<User> {
  type = LOG_IN;
}

export class Logged extends CommonAction<UserInfo> {
  type = LOGGED;
}

export function authReducer(auth: UserInfo = new UserInfo('', ''), action: CommonAction<UserInfo>) {
  switch (action.type) {
    case LOGGED:
      return action.payload;
    default:
      return auth;
  }
}

import { JwtHelperService } from '@auth0/angular-jwt';

export class UserInfo {
    public expAuthorization: number;
    public expRefresh: number;
    constructor(public token: string, public refresh: string, public permissions: any) {
        const helper = new JwtHelperService();
        const authToken = token && helper.decodeToken(token);
        this.expAuthorization = authToken.exp;
        const refreshToken = token && helper.decodeToken(refresh);
        this.expRefresh = token && refreshToken.exp;
    }
}
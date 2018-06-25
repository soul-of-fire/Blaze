import { Component } from '@angular/core';
import { AuthService } from './shared/auth/auth.service';
import { ApiService } from './shared/api/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public authService: AuthService, public apiService: ApiService) {}

  onLogout() {
    this.authService.logout();
  }
}

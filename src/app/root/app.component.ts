import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/auth/auth.service';
import { ApiService } from './shared/api/api.service';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { NgxPermissionsService } from 'ngx-permissions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loading: Boolean = false;
  collapse = true;
  dir: string = 'ltr';

  constructor(public authService: AuthService, 
              private apiService: ApiService, 
              private permissionsService: NgxPermissionsService,
              private translate: TranslateService) {
    translate.setDefaultLang('en');
  }

  ngOnInit() {
    this.apiService.loading$.subscribe((data: any) => {
      setTimeout(() => {
        this.loading = data;
      })
    });
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.dir = event.lang == 'en' ? 'ltr' : 'rtl';
    });
    this.permissionsService.loadPermissions(["ADMIN"]);
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }

  onLogout() {
    this.authService.logout();
  }
}

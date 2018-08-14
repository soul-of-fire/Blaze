import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HTTP_INTERCEPTORS, HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToasterModule } from 'angular2-toaster';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPermissionsModule, NgxPermissionsGuard } from 'ngx-permissions';

import { AppComponent } from './root/app.component';
import { LoginComponent } from './login/login.component';
import { AuthEffects } from './root/shared/store/auth-effects';
import { authReducer } from './root/shared/store/auth-store';
import { AuthService } from './root/shared/auth/auth.service';
import { AuthGuard } from './root/shared/auth/auth-guard';
import { OptionsService } from './root/shared/api/options.service';
import { ApiService } from './root/shared/api/api.service';
import { PageNotFoundComponent } from 'src/app/common/page-not-found/page-not-found.component';
import { SupplierResolver } from 'src/app/supplier/shared/common/supplier-resolver';
import { ConfirmComponent } from 'src/app/common/confirm/confirm/confirm.component';
import { ConfirmModule } from 'src/app/common/confirm/confirm.module';
import { PermissionComponent } from './permission/permission.component';

const routes = [
  { path: '', redirectTo: 'supplier', pathMatch: 'full' },
  { path: 'supplier', loadChildren: 'src/app/supplier/supplier.module#SupplierModule', 
    canActivate: [AuthGuard],
    resolve: {
      suppliers: SupplierResolver
    } 
  },
  { path: 'permission', component: PermissionComponent, 
    canActivate: [AuthGuard, NgxPermissionsGuard],
    data: {
      permissions: {
        only: 'ADMIN'
      }
    } 
  },
  { path: 'login', component: LoginComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot({
      auth: authReducer
    }),
    EffectsModule.forRoot([AuthEffects]),
    HttpClientModule,
    BrowserAnimationsModule,
    ToasterModule.forRoot(),
    NgbModule.forRoot(),
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    }),
    ConfirmModule,
    NgxPermissionsModule.forRoot()
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent,
    PermissionComponent
  ],
  providers: [
    ApiService,
    AuthService,
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: OptionsService, multi: true },
    SupplierResolver
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    ConfirmComponent
  ]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToasterModule} from 'angular2-toaster';

import { AppComponent } from './root/app.component';
import { TransportComponent } from './transport/transport.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthEffects } from './root/shared/store/auth-effects';
import { authReducer } from './root/shared/store/auth-store';
import { AuthService } from './root/shared/auth/auth.service';
import { AuthGuard } from './root/shared/auth/auth-guard';
import { OptionsService } from './root/shared/api/options.service';
import { ApiService } from './root/shared/api/api.service';

const routes = [
  { path: '', redirectTo: 'transport', pathMatch: 'full' },
  { path: 'transport', component: TransportComponent, canActivate: [AuthGuard] },
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
    ToasterModule.forRoot()
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    TransportComponent,
    PageNotFoundComponent
  ],
  providers: [
    ApiService,
    AuthService,
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: OptionsService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { LogIn } from '../root/shared/store/auth-store';
import { User } from '../root/shared/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  authForm: FormGroup;
  
  constructor(protected formBuilder: FormBuilder, private store: Store<any>) { }

  ngOnInit() {
    this.authForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  get username() { return this.authForm.get('username'); }
  get password() { return this.authForm.get('password'); }

  onSubmit() {
    this.store.dispatch(new LogIn(new User(this.username.value, this.password.value)));
  }

}

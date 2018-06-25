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
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  get email() { return this.authForm.get('email'); }
  get password() { return this.authForm.get('password'); }

  onSubmit() {
    this.store.dispatch(new LogIn(new User(this.email.value, this.password.value)));
  }

}

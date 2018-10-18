import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);

  completed;
  captchaResolved = false;

  constructor() { }

  hide = true;
  blur = false;

  color() {
    return this.password.hasError('required') && this.blur ? 'warn' : ''; 
  }

  resolved() {
    this.captchaResolved = true;
  }

  isCompleted() {
    return !this.email.hasError('required') && !this.email.hasError('email') && !this.password.hasError('required') && this.captchaResolved;
  }

  getEmailErrorMessage() {
    return this.email.hasError('required') ? 'Digite su Email' :
      this.email.hasError('email') ? 'Digite un Email valido' :
      '';
  }

  getPasswordErrorMessage() {
    return this.password.hasError('required') ? 'Digite su Contraseña' :
      '';
  }

  ngOnInit() {
  }
}

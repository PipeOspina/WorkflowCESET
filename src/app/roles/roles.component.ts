import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  constructor() { }

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);

  completed;
  captchaResolved = false;

  hide = true;
  blur = false;

  resolved() {
    this.captchaResolved = true;
  }

  color() {
    console.log(this.blur);
    return this.password.hasError('required') && this.blur ? 'warn' : ''; 
  }

  isCompleted() {
    return !this.email.hasError('required') && !this.email.hasError('email') && !this.password.hasError('required') && this.captchaResolved;
  }

  getEmailErrorMessage() {
    return this.email.hasError('required') ? 'Digite su Email' :
      this.email.hasError('email') ? `Digite un Email valido` :
      '';
  }

  getPasswordErrorMessage() {
    return this.password.hasError('required') ? 'Digite su Contraseña' :
      '';
  }

  ngOnInit() {
  }

}

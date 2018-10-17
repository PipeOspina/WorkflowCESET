import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';

import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

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

  myControl = new FormControl();
  options: User[] = [
    {name: 'Mary'},
    {name: 'Shelley'},
    {name: 'Igor'}
  ];
  filteredOptions: Observable<User[]>;

  ngOnInit() {
    
  }

  listItems() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith<string | User>(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.options.slice())
      );
  }

  displayFn(user?: User): string | undefined {
    return user ? user.name : undefined;
  }

  private _filter(name: string): User[] {
    const filterValue = name.toLowerCase();
    return this.options.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }
}

export interface User {
  name: string;
}
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
    {name: 'Mary',
      last: 'Presley'},
    {name: 'Shelley',
  last: 'Mar'},
    {name: 'Igor',
  last: 'Marcela'}
  ];
  filteredOptions: Observable<User[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith<string | User>(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : [])
      );
      console.log(this.options.slice());
  }

  listItems() {
    
  }

  displayFn(user?: User): string | undefined {
    return user ? user.last : undefined;
  }

  private _filter(name: string): User[] {
    const filterValue = name.toLowerCase();
    return this.options.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0 || option.last.toLowerCase().indexOf(filterValue) === 0 || option.last.toLowerCase().includes(filterValue));
  }
}

export interface User {
  name: string;
  last: string;
}
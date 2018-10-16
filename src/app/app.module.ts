import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ViewEncapsulation } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule, MatCheckboxModule, MatDatepickerModule, MatFormFieldModule, MatNativeDateModule, MatInputModule, MatSelect, MatSelectModule } from '@angular/material';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecaptchaModule } from 'ng-recaptcha';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    RecaptchaModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    MatButtonModule,
    MatCheckboxModule
  ]
})
export class AppModule { }

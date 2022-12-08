import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './_Pages/login/login.component';
import { GoogleSigninComponent } from './_Pages/google-signin/google-signin.component';
import { ButtonComponent } from './_Component/button/button.component';
import { CheckboxComponent } from './_Component/checkbox/checkbox.component';
import { InputComponent } from './_Component/input/input.component';
import { ForgetpwComponent } from './_Pages/forgetpw/forgetpw.component';
import { SignupComponent } from './_Pages/signup/signup.component';
import { MessageErrorComponent } from './_Component/message-error/message-error.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    CheckboxComponent,
    InputComponent,
    MessageErrorComponent,
    LoginComponent,
    GoogleSigninComponent,
    ForgetpwComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

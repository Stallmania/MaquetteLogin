import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './_Pages/login/login.component';
import { ButtonComponent } from './_Component/button/button.component';
import { CheckboxComponent } from './_Component/checkbox/checkbox.component';
import { InputComponent } from './_Component/input/input.component';
import { ForgetpwComponent } from './_Pages/forgetpw/forgetpw.component';
import { SignupComponent } from './_Pages/signup/signup.component';
import { ConnectedComponent } from './_Pages/connected/connected.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './_Component/_OctomComponent/header/header.component';
import { SidebarComponent } from './_Component/_OctomComponent/sidebar/sidebar.component';
import { ContainerComponent } from './_Component/container/container.component';
import { LogoComponent } from './_Component/logo/logo.component';
import { SigninComponent } from './_Component/signin/signin.component';




@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    CheckboxComponent,
    InputComponent,

    LoginComponent,

    ForgetpwComponent,
    SignupComponent,
    ConnectedComponent,
    HeaderComponent,
    SidebarComponent,
    ContainerComponent,
    LogoComponent,
    SigninComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

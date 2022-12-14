import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoogleSigninComponent } from './_Pages/google-signin/google-signin.component';
import { ForgetpwComponent } from './_Pages/forgetpw/forgetpw.component';
import { SignupComponent } from './_Pages/signup/signup.component';
import { LoginComponent } from './_Pages/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    children:[
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'google-signiin',
        component: GoogleSigninComponent
      },
      {
        path: 'forgetpw',
        component: ForgetpwComponent
      },
      {
        path: 'signup',
        component: SignupComponent
      },
      {
        path: 'signup',
        component: SignupComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

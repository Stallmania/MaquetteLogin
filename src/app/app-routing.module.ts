import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignupComponent } from './_Pages/signup/signup.component';
import { LoginComponent } from './_Pages/login/login.component';
import { ForgetpwComponent } from './_Pages/forgetpw/forgetpw.component';
import { ConnectedComponent } from './_Pages/connected/connected.component';
import { SigninComponent } from './_Component/signin/signin.component';

const octomRoutes: Routes = [
  { path: '', component: LoginComponent,
    children: [
      {path: '', component: SigninComponent },
      {path: 'forget_password', component: ForgetpwComponent }
  ]},
  { path: 'connected', component: ConnectedComponent},
  { path: 'signup', component: SignupComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(octomRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

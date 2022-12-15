import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignupComponent } from './_Pages/signup/signup.component';
import { LoginComponent } from './_Pages/login/login.component';
import { ForgetpwComponent } from './_Pages/forgetpw/forgetpw.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'forget_password', component: ForgetpwComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

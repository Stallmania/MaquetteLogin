import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validator } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/_Models/User';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})

export class SigninComponent implements OnInit{

  loginForm!:FormGroup;
  user!:User;
  error!:string;

  constructor(private formBuilder:FormBuilder, private httpClient:HttpClient){}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username:'',
      password:''
    });
  }

/*   get username(){
    return this.loginForm.get('username') as FormControl;
  }
  get password(){
    return this.loginForm.get('password') as FormControl;
  } */

  auth(){
    if (!this.loginForm.valid) {
      this.error = "empty credantnal"
      return;
    }
    this.httpClient.post<User>('https://dummyjson.com/auth/login', this.loginForm.value).subscribe(result=>
    {this.user = result});
  }
}

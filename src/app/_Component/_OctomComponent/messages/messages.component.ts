import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/_Models/User';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent {

  constructor(private httpClient:HttpClient) {

  }
  id!: number;
  user!:User
  ngOnInit(): void {
    this.httpClient.get<User>('https://dummyjson.com/users/1')
      .subscribe(user => this.user = user)
  }

  public name() {
    console.log('User: ', this.user)
  }
}

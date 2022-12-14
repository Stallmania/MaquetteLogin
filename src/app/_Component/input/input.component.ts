import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Input() inputLabel: String='Login';
  @Input() type: String ='text' ;
  @Input() placeholderr: String ='Email or phone number';


  constructor(){}

  ngOnInit():void{

  }
}


/* errorMessage : string = ""

validateEmail(email:string) {
  this.email = "";

  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    this.errorMessage = "E-mail incorrect";
  }
}

sendMail() {
this.errorMessage = "saisie incorect !";
} */
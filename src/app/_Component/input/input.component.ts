import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  email: string = '';
  @Input() label!: string;
  errorMessage : string = ""

  validateEmail(email:string) {
    this.email = "";

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      this.errorMessage = "E-mail incorrect";
    }
  }
  
  sendMail() {
  this.errorMessage = "saisie incorect !";
  }
}

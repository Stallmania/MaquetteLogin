import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Input() inputLabel: String = 'Login';//ce n'ai pas par default !
  @Input() placeholderr: String = 'Email or phone number';//ce n'ai pas par default !
  @Input() type: String = 'text';
  @Output() values: EventEmitter<string> = new EventEmitter<string>();


  constructor() { }

  ngOnInit(): void {

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
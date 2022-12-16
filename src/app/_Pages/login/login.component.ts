import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  recuperValeur(valeur: string) {
    alert("@Output() j'ai saisi : "+valeur)
  }
}

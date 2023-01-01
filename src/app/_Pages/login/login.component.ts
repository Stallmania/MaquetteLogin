import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {

  backcolor!:String;
  foncolor!:String;

  recuper(valeur: boolean) {
    if (valeur) {
      this.backcolor = '#22222a';
      this.foncolor = '#fdfdfd';

    }else{
      this.backcolor='';
      this.foncolor='';
    }
  }
}

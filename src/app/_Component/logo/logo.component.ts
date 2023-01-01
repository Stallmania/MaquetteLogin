import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent {
  public show:boolean = true;
  public buttonName:string = 'Show';
  @Output() envoi = new EventEmitter();

  ngOnInit () {  }

  toggle() {
    this.show = !this.show;

    if(this.show)  {
      this.buttonName = "Hide";
    }
    else{
      this.buttonName = "Show";
    }
  }
}

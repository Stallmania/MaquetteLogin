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
  @Output() patat = new EventEmitter<string>();


  constructor() { }

  ngOnInit(): void {

  }
}

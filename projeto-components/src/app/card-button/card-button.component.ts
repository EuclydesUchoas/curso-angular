import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-card-button',
  standalone: false,
  templateUrl: './card-button.component.html',
  styleUrl: './card-button.component.scss'
})
export class CardButtonComponent {
  propTest: boolean = false;
  @Output('buttonClick') buttonClickEmitter = new EventEmitter<boolean>();

  onButtonClick() {
    console.log('onButtonClick');

    this.buttonClickEmitter.emit(this.propTest);
  }
}

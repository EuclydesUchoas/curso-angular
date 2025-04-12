import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: false,
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input({ required: true, alias: 'text' })
  buttonText: string = '';

  @Input({ required: true, alias: 'style' })
  buttonStyle: 'white' | 'purple' = 'white';

  @Input({ required: false, alias: 'disabled' })
  isDisabled: boolean = false;

  @Output('clicked')
  buttonClickedEmmit = new EventEmitter<void>();

  onButtonClicked() {
    this.buttonClickedEmmit.emit();
  }
}

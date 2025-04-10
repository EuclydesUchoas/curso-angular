import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: false,
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  encapsulation: ViewEncapsulation.Emulated
})
export class CardComponent {
  @Input({ required: true, alias: 'planPriceAlias' }) planPrice: number = 0;

  private _planType: string = '';

  @Input('planType') 
  set planType(value: string) {
    this._planType = value.toUpperCase();
  }

  get planType(): string {
    return this._planType;
  }

  buttonClicked(valueEmitted: boolean) {
    console.log('buttonClicked', valueEmitted);
    console.log('planType', this.planType);
  }
}

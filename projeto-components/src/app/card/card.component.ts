import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: false,
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  encapsulation: ViewEncapsulation.Emulated
})
export class CardComponent {
  @Input('planType') planType: string = '';
  @Input({ required: true, alias: 'planPriceAlias' }) planPrice: number = 0;
}

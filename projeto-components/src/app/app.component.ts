import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  cardPlanType = 'Simples';
  cardPlanPrice = 100;

  handlePlanType(text: string) {
    this.cardPlanType = text;
  }
}

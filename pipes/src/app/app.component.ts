import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  pessoa = {
    name: "Euclydes",
    status: 1
  };

  pessoa2 = {
    name: "Matheus",
    status: 2
  };

  pessoa3 = {
    name: "Luis",
    status: 3
  };

  getStyle(status: number) {
    console.log('getStyle');
    
    return {
      'active': status === 1,
      'partial': status === 2,
      'blocked': status === 3
    }
  }
}

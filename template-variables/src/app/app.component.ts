import { Component, ElementRef, ViewChild } from '@angular/core';
import { FilhoComponent } from './filho/filho.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  @ViewChild('filhoComp')
  filhoCompRef!: FilhoComponent;

  hello() {
    this.filhoCompRef.dizerOi();
    this.filhoCompRef.message = 'Eu disso "Oi"!';
  }
}

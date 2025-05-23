import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  personSelectedIndex: number | undefined;
  listPeople = [
    { name: 'Euclydes Uchoas', age: 26 },
    { name: 'Fulano da Silva', age: 34 },
    { name: 'Jorginho Carvalho', age: 55 },
    { name: 'Joãozinho da Silva', age: 18 },
  ];

  selectPerson(index: number) {
    console.log(index);
    this.personSelectedIndex = index;
  }
}

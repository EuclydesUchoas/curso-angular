import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('meuInput')
  meuInputEl!: ElementRef<HTMLInputElement>;

  constructor() {
    console.log('constructor');
  }

  ngOnInit() {
    console.log('ngOnInit', this.meuInputEl);

    //this.meuInputEl.nativeElement.focus();
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit', this.meuInputEl);

    this.meuInputEl.nativeElement.focus();
  }
}

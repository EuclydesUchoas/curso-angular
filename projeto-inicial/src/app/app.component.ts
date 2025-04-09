import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  // Event Binding

  // inputText = 'Texto Inicial Alterado';
  // inputType = 'text';
  // isDisabled = true;

  // enableInput() {
  //   this.isDisabled = false;
  // }

  // disableInput() {
  //   this.isDisabled = true;
  // }

  // setPasswordTypeInput() {
  //   this.inputType = 'password';
  // }

  // setTextTypeInput() {
  //   this.inputType = 'text';
  // }

  // logInputText() {
  //   console.log(this.inputText);
  // }

  // handleInputKeyup(event: KeyboardEvent) {
  //   const currentText = (event.target as HTMLInputElement).value;
  //   console.log(currentText);
  // }

  // handleInputEvent(event: Event) {
  //   const currentText = (event.target as HTMLInputElement).value;
  //   console.log(currentText);
  // }

  // Attribute Binding

  // buttonTitle = 'Título do Botão';
  // buttonDisable = false;

  // onButtonClick() {
  //   this.buttonTitle = 'Título ALTERADO';
  //   this.buttonDisable = !this.buttonDisable;
  // }

  // Style Binding

  widthButton1 = '110px';
  widthButton2 = 130;
  stylesObj = { 
    width: '160px', 
    backgroundColor: 'grey' 
  };

  updateStyleObj() {
    console.log('updateStyleObj');

    this.stylesObj.width = '170px';
    this.stylesObj.backgroundColor = 'lightblue';
  }

  updateStyleObjCorrect() {
    console.log('updateStyleObjCorrect');

    this.stylesObj = { 
      width: '170px', 
      backgroundColor: 'lightblue' 
    };
  }

  updateWidth() {
    this.widthButton2 = 200;
  }
}

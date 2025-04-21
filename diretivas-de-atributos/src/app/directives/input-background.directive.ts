import { Directive, HostBinding, HostListener, Input } from "@angular/core";

@Directive({
    selector: '[appInputBackground]',
    standalone: false
})
export class InputBackgroundDirective {
    // Meu exemplo
    // @Input()
    // @HostBinding('style.backgroundColor')
    // appInputBackground: string = 'white';

    @Input('bgColor')
    appInputBackground: string = 'white';

    @Input('tColor')
    textColor: string = 'black';

    @HostBinding('style.backgroundColor')
    bgColor: string = '';

    @HostBinding('style.color')
    color: string = '';

    @HostListener('focus')
    onFocus() {
        this.bgColor = this.appInputBackground;
        this.color = this.textColor;
    }

    @HostListener('blur')
    onBlur() {
        this.bgColor = 'white';
        this.color = 'black';
    }
}
import { AfterViewInit, Directive, ElementRef } from "@angular/core";

@Directive({
    selector: '[appFocusSecondInput]',
    standalone: false
})
export class FocusSecondInputDirective implements AfterViewInit {
    // @HostBinding('style.backgroundColor')
    // bgColor = 'blue';

    // @HostBinding('textContent')
    // text = 'Sou uma div!';

    constructor(
        private readonly _elRef: ElementRef
    ) { }

    ngAfterViewInit() {
        const inputList = this._elRef.nativeElement.querySelectorAll('input') as HTMLInputElement[];

        if (inputList.length > 1) {
            inputList[1].focus();
        }
    }
}
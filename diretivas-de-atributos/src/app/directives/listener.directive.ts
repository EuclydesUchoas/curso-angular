import { Directive, HostListener } from "@angular/core";

@Directive({
    selector: '[appListener]',
    standalone: false
})
export class ListenerDirective {
    @HostListener('click')
    onClick() {
        console.log('CLICOU!');
    }

    @HostListener('keyup', ['$event', '"Meu Argumento"'])
    onKeyUp(event: Event, param2: string) {
        //console.log('DIGITOU!', event);
        console.log(param2);

        const fullText = (event.target as HTMLInputElement).value;

        console.log(fullText);
    }
}
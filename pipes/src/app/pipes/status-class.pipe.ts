import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'statusClass',
    standalone: false,
})
export class StatusClassPipe implements PipeTransform {
    transform(status: number): string {
        console.log('StatusClassPipe');

        // if (status === 1) {
        //     return 'active';
        // }
        // else if (status === 2) {
        //     return 'partial';
        // }
        // else {
        //     return 'blocked';
        // }

        // switch (status) {
        //     case 1: return 'active';
        //     case 2: return 'partial';
        //     case 3: return 'blocked';
        //     default: return '';
        // }

        const obj: { [key: number]: string } = {
            1: 'active',
            2: 'partial',
            3: 'blocked'
        };
        
        return obj[status];
    }
}
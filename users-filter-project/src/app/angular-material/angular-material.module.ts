import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { /*MatNativeDateModule, */provideNativeDateAdapter } from "@angular/material/core";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatDividerModule } from "@angular/material/divider";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from "@angular/material/select";

@NgModule({
    imports: [
        MatListModule,
        MatDividerModule,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        //MatNativeDateModule,
        MatSelectModule,
        MatButtonModule
    ],
    exports: [
        MatListModule,
        MatDividerModule,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        //MatNativeDateModule,
        MatSelectModule,
        MatButtonModule
    ],
    providers: [
        provideNativeDateAdapter()
    ]
})
export class AngularMaterialModule { }
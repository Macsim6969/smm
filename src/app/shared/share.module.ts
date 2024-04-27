import {NgModule} from "@angular/core";
import {MatIcon} from "@angular/material/icon";
import {MatCard, MatCardActions, MatCardContent, MatCardHeader} from "@angular/material/card";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatFormFieldModule, MatLabel} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {CurrencyStarPipe} from "./pipes/currentyStar.pipe";
import {MatDatepicker, MatDatepickerInput, MatDatepickerToggle} from "@angular/material/datepicker";
import { MatList, MatListItem } from "@angular/material/list";
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    CurrencyStarPipe
  ],
  exports: [
    MatList,
    MatListItem,
    MatIcon,
    MatCard,
    MatButton,
    MatLabel,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatIconButton,
    MatCardHeader,
    MatCardContent,
    MatCardActions,
    CurrencyStarPipe,
    MatDatepickerToggle,
    MatDatepicker,
    MatDatepickerInput,
    MatProgressSpinnerModule
  ],
  imports: [
    MatList,
    MatListItem,
    MatIcon,
    MatCard,
    MatButton,
    MatLabel,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatIconButton,
    MatCardHeader,
    MatCardContent,
    MatCardActions,
    MatDatepickerToggle,
    MatDatepicker,
    MatDatepickerInput,
    MatProgressSpinnerModule
  ]
})

export class ShareModule {
}

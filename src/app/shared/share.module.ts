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
    MatDatepickerInput
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
    MatDatepickerInput
  ]
})

export class ShareModule {
}

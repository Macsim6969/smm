import {NgModule} from "@angular/core";
import {MatIcon} from "@angular/material/icon";
import {MatCard, MatCardActions, MatCardContent, MatCardHeader} from "@angular/material/card";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatFormFieldModule, MatLabel} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {CurrencyStarPipe} from "./pipes/currentyStar.pipe";


@NgModule({
  declarations: [
    CurrencyStarPipe
  ],
  exports: [
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
    CurrencyStarPipe
  ],
  imports: [
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
    MatCardActions
  ]
})

export class ShareModule {
}

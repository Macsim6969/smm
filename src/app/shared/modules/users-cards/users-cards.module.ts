import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersCardsComponent } from "./users-cards.component";
import { ShareModule } from "../../share.module";
import { PopupCardComponent } from "../../components/popup-card/popup-card.component";
import { FormatCardNumberPipe } from "./services/formatCardNumber.pipe";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ProfilIconService } from "./services/profilIcon.service";
import { UsersCardsService } from "../../services/usersCards.service";


@NgModule({
  declarations: [
    UsersCardsComponent,
    PopupCardComponent,
    FormatCardNumberPipe
  ],
  exports: [
    UsersCardsComponent
  ],
  imports: [
    CommonModule,
    ShareModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UsersCardsService]
})
export class UsersCardsModule {
}

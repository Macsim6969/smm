import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HistoryComponent} from "./history.component";
import {ShareModule} from "../../../../../../../../shared/share.module";
import {MatList, MatListItem} from "@angular/material/list";
import {UsersCardsService} from "../../../../../../../../shared/services/usersCards.service";
import {CreditCardMaskPipe} from "./creditCardMask.pipe";



@NgModule({
  declarations: [
    HistoryComponent,
    CreditCardMaskPipe
  ],
  exports: [
    HistoryComponent
  ],
  imports: [
    CommonModule,
    ShareModule,
    MatList,
    MatListItem
  ],
  providers: [UsersCardsService]
})
export class HistoryModule { }

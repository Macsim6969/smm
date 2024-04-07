import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OscillateComponent} from "./oscillate.component";
import {ShareModule} from "../../../../../shared/share.module";
import {RouterModule, Routes} from "@angular/router";
import {UsersCardsModule} from "../../../../../shared/modules/users-cards/users-cards.module";
import {HistoryModule} from "./@shared/modules/history/history.module";
import {HistoryService} from "./@shared/services/history.service";


const routes: Routes = [
  {path: '', component: OscillateComponent}
]
@NgModule({
  declarations: [
    OscillateComponent
  ],
  imports: [
    CommonModule,
    ShareModule,
    HistoryModule,
    UsersCardsModule,
    RouterModule.forChild(routes)
  ],
  providers: [HistoryService]
})
export class OscillateModule { }

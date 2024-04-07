import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SupportComponent} from "./support.component";
import {ShareModule} from "../../../../../shared/share.module";
import {Router, RouterModule, Routes} from "@angular/router";
import {SupportService} from "./@shared/services/support.service";
import {SupportIconService} from "./@shared/services/supportIcon.service";
import {SupportCardComponent} from "./@shared/component/support-card/support-card.component";


const routes: Routes = [
  {path: '', component: SupportComponent}
]
@NgModule({
  declarations: [
    SupportComponent,
    SupportCardComponent
  ],
  imports: [
    CommonModule,
    ShareModule,
    RouterModule.forChild(routes)
  ],
  providers: [SupportService, SupportIconService]
})
export class SupportModule { }

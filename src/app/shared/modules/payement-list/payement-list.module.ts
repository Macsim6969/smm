import {NgModule} from "@angular/core";
import {PayementListComponent} from "./payement-list.component";
import {CommonModule} from "@angular/common";
import {ShareModule} from "../../share.module";
import {MatList, MatListItem} from "@angular/material/list";
import {ListIconService} from "./list.service";


@NgModule({
  declarations: [
    PayementListComponent
  ],
  imports: [
    CommonModule,
    ShareModule,
    MatList,
    MatListItem
  ],
  exports: [
    PayementListComponent
  ],
  providers: [ListIconService]
})

export class PayementListModule {
}

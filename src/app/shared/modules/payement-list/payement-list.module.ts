import {NgModule} from "@angular/core";
import {PayementListComponent} from "./payement-list.component";
import {CommonModule} from "@angular/common";
import {ShareModule} from "../../share.module";
import {MatList, MatListItem} from "@angular/material/list";
import {ListIconService} from "./list.service";
import {FilterPipe} from "./listSearch.pipe";
import { FormsModule } from "@angular/forms";
import { UsersSearchService } from "../../services/usersSearch.service";


@NgModule({
  declarations: [
    PayementListComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ShareModule,
    MatList,
    MatListItem
  ],
  exports: [
    PayementListComponent
  ],
  providers: [ListIconService, UsersSearchService]
})

export class PayementListModule {
}

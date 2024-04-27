import {NgModule} from "@angular/core";
import {PayementListComponent} from "./payement-list.component";
import {CommonModule} from "@angular/common";
import {ShareModule} from "../../share.module";
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
    ShareModule
  ],
  exports: [
    PayementListComponent
  ],
  providers: [UsersSearchService]
})

export class PayementListModule {
}

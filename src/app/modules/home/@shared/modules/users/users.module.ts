import {NgModule} from "@angular/core";
import {UsersComponent} from "./users.component";
import {CommonModule} from "@angular/common";
import {ShareModule} from "../../../../../shared/share.module";
import {PayementListModule} from "../../../../../shared/modules/payement-list/payement-list.module";
import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";
import { UsersSearchComponent } from "./@shared/components/users-search/users-search.component";

const routes: Routes = [
  {path: '', component: UsersComponent}
]
@NgModule({
  declarations: [
    UsersComponent,
    UsersSearchComponent
  ],
    imports: [
        CommonModule,
        ShareModule,
        PayementListModule,
        RouterModule.forChild(routes),
        FormsModule
    ],
  exports: [],
})

export class UsersModule {}

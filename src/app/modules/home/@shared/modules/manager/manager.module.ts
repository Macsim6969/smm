import {NgModule} from "@angular/core";
import {ManagerComponent} from "./manager.component";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import {ShareModule} from "../../../../../shared/share.module";
import {ProfileModule} from "../../../../../shared/modules/profile/profile.module";
import {PayementListModule} from "../../../../../shared/modules/payement-list/payement-list.module";
import { UsersSearchComponent } from "./@shared/components/users-search/users-search.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { UsersSearchService } from "../../../../../shared/services/usersSearch.service";


const routes: Routes = [
  {path: '', component: ManagerComponent}
]
@NgModule({
  declarations: [
    ManagerComponent,
    UsersSearchComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    ShareModule,
    ProfileModule,
    PayementListModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [UsersSearchService]
})

export class ManagerModule {

}

import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import {ShareModule} from "../../../../../shared/share.module";
import {ProfileModule} from "../../../../../shared/modules/profile/profile.module";
import {PayementListModule} from "../../../../../shared/modules/payement-list/payement-list.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { UsersSearchService } from "../../../../../shared/services/usersSearch.service";
import { MarkaComponent } from "./marka.component";
import { UsersSearchComponent } from "./@shared/components/users-search/users-search.component";


const routes: Routes = [
  {path: '', component: MarkaComponent}
]
@NgModule({
  declarations: [
    MarkaComponent,
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

export class MarkaModule {

}

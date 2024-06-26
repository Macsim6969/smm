import {NgModule} from "@angular/core";
import {ManagerComponent} from "./manager.component";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import {ShareModule} from "../../../../../shared/share.module";
import {ProfileModule} from "../../../../../shared/modules/profile/profile.module";
import {PayementListModule} from "../../../../../shared/modules/payement-list/payement-list.module";


const routes: Routes = [
  {path: '', component: ManagerComponent}
]
@NgModule({
  declarations: [
    ManagerComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    ShareModule,
    ProfileModule,
    PayementListModule,
    RouterModule.forChild(routes)
  ]
})

export class ManagerModule {

}

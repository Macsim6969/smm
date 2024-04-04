import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ProfilComponent} from "./profil.component";
import {CommonModule} from "@angular/common";
import {ShareModule} from "../../../../../shared/share.module";
import {ProfileModule} from "../../../../../shared/modules/profile/profile.module";
import {ProfilIconService} from "./services/profilIcon.service";

const routes: Routes = [
  {path: '', component: ProfilComponent}
]
@NgModule({
  declarations: [
    ProfilComponent
  ],
  imports: [
    CommonModule,
    ProfileModule,
    RouterModule.forChild(routes),
    ShareModule
  ],
  exports: [],
  providers: [ProfilIconService]
})

export class ProfilModule {

}

import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ProfilComponent} from "./profil.component";
import {CommonModule} from "@angular/common";
import {ShareModule} from "../../../../../shared/share.module";
import {ProfileModule} from "../../../../../shared/modules/profile/profile.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {UsersCardsModule} from "../../../../../shared/modules/users-cards/users-cards.module";

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
    UsersCardsModule,
    RouterModule.forChild(routes),
    ShareModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})

export class ProfilModule {

}

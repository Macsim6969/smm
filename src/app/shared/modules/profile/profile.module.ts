import {NgModule} from "@angular/core";
import {ProfileComponent} from "./profile.component";
import {CommonModule} from "@angular/common";
import {ShareModule} from "../../share.module";
import {MatCardActions} from "@angular/material/card";


@NgModule({
  declarations: [
    ProfileComponent
  ],
  exports: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    ShareModule
  ]
})

export class ProfileModule {

}

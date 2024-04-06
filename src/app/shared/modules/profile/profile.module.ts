import {NgModule} from "@angular/core";
import {ProfileComponent} from "./profile.component";
import {CommonModule} from "@angular/common";
import {ShareModule} from "../../share.module";
import {MatCardActions} from "@angular/material/card";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    ProfileComponent
  ],
  exports: [
    ProfileComponent
  ],
    imports: [
        CommonModule,
        ShareModule,
        FormsModule
    ]
})

export class ProfileModule {

}

import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AuthComponent} from "./auth.component";
import {CommonModule} from "@angular/common";
import {LoginComponent} from "./@shared/components/login/login.component";
import {RegisterComponent} from "./@shared/components/register/register.component";
import {AuthIconsService} from "./@shared/services/authIcons.service";
import {LogoComponent} from "./@shared/components/logo/logo.component";
import {ShareModule} from "../../shared/share.module";
import {ReactiveFormsModule} from "@angular/forms";
import {AuthService} from "./@shared/services/auth.service";


const routes: Routes = [
  {path: '', component: AuthComponent, children: [
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent}
    ]}
]

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    LogoComponent

  ],
  imports: [
    CommonModule,
    ShareModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
  ],
  exports: [],
  providers: [AuthIconsService, AuthService]
})

export class AuthModule {}

import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AuthComponent} from "./auth.component";
import {CommonModule} from "@angular/common";
import {LoginComponent} from "./@shared/components/login/login.component";
import {RegisterComponent} from "./@shared/components/register/register.component";
import {AuthIconsService} from "./@shared/services/authIcons.service";
import {LogoComponent} from "./@shared/components/logo/logo.component";
import {MatIcon} from "@angular/material/icon";
import {ShareModule} from "../shared/share.module";
import {MatCard} from "@angular/material/card";
import {MatLabel} from "@angular/material/form-field";
import {MatIconButton} from "@angular/material/button";
import {ReactiveFormsModule} from "@angular/forms";
import {AuthService} from "./@shared/services/auth.service";
import {AuthGuard} from "../shared/services/auth.guard";


const routes: Routes = [
  {path: '', component: AuthComponent, canActivate: [AuthGuard], children: [
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

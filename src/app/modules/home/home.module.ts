import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from "./home.component";
import {ShareModule} from "../../shared/share.module";
import {RouterModule, Routes} from "@angular/router";
import {SidebarComponent} from "./@shared/components/sidebar/sidebar.component";
import {SidebarIconService} from "./@shared/services/sidebarIcon.service";
import {HeaderComponent} from "./@shared/components/header/header.component";


const routes: Routes = [
  {path: '', component: HomeComponent, children: [
      {path: 'manager', loadChildren: () => import('./@shared/modules/manager/manager.module').then(m => m.ManagerModule)},
      { path: '',
        pathMatch: 'full',
        redirectTo: 'manager'
      }
    ]},
]

@NgModule({
  declarations: [
    HomeComponent,
    SidebarComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    ShareModule,
    RouterModule.forChild(routes)
  ],
  exports: [],
  providers: [SidebarIconService]
})
export class HomeModule { }

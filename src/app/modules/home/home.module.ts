import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from "./home.component";
import { ShareModule } from "../../shared/share.module";
import { RouterModule, Routes } from "@angular/router";
import { SidebarComponent } from "./@shared/components/sidebar/sidebar.component";
import { SidebarIconService } from "./@shared/services/sidebarIcon.service";
import { HeaderComponent } from "./@shared/components/header/header.component";
import { PopupOffersComponent } from '../../shared/components/popup-offers/popup-offers.component';
import { PopupOfferService } from '../../shared/services/popup-offer.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
  {
    path: '', component: HomeComponent, children: [
      { path: 'affiliate', loadChildren: () => import('./@shared/modules/afiliat/afiliat.module').then(m => m.AfiliatModule) },
      { path: 'marka', loadChildren: () => import('./@shared/modules/marka/marka.module').then(m => m.MarkaModule) },
      { path: 'manager', loadChildren: () => import('./@shared/modules/manager/manager.module').then(m => m.ManagerModule) },
      { path: 'added-processing', loadChildren: () => import('./@shared/modules/added-offers/added-offers.module').then(m => m.AddedOffersModule) },
      { path: 'offers', loadChildren: () => import('./@shared/modules/offer/offer.module').then(m => m.OfferModule) },
      { path: 'users', loadChildren: () => import('./@shared/modules/users/users.module').then(m => m.UsersModule) },
      { path: 'profil', loadChildren: () => import('./@shared/modules/profil/profil.module').then(m => m.ProfilModule) },
      { path: 'oscillate', loadChildren: () => import('./@shared/modules/oscillate/oscillate.module').then(m => m.OscillateModule) },
      { path: 'support', loadChildren: () => import('./@shared/modules/support/support.module').then(m => m.SupportModule) },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'manager'
      }
    ]
  },
]

@NgModule({
  declarations: [
    HomeComponent,
    SidebarComponent,
    HeaderComponent,
    PopupOffersComponent
  ],
  imports: [
    CommonModule,
    ShareModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    HeaderComponent
  ],
  providers: [SidebarIconService, PopupOfferService]
})
export class HomeModule { }

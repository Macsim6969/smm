import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ShareModule } from "../../../../../shared/share.module";
import { RouterModule, Routes } from "@angular/router";
import { OfferComponent } from "./offer.component";
import { UsersSearchComponent } from "./@shared/components/users-search/users-search.component";
import { PayementListModule } from "../../../../../shared/modules/payement-list/payement-list.module";
import { FormsModule } from "@angular/forms";
import { UsersSearchService } from "./@shared/services/usersSearch.service";

const routes: Routes = [
  { path: '', component: OfferComponent }
]

@NgModule({
  declarations: [
    OfferComponent,
    UsersSearchComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    ShareModule,
    FormsModule,
    PayementListModule,
    RouterModule.forChild(routes)
  ],
  providers: [UsersSearchService]
})

export class OfferModule { }
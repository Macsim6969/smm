import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { ShareModule } from '../../../../../shared/share.module';
import { RouterModule, Routes } from '@angular/router';
import { AddedOffersComponent } from './added-offers.component';
import { PayementListModule } from '../../../../../shared/modules/payement-list/payement-list.module';
import { FormsModule } from '@angular/forms';
import { UsersSearchComponent } from './@shared/components/users-search/users-search.component';

const routes: Routes = [
  { path: '', component: AddedOffersComponent }
]
@NgModule({
  declarations: [
    AddedOffersComponent,
    UsersSearchComponent
  ],
  exports: [
    AddedOffersComponent
  ],
  imports: [
    CommonModule,
    ShareModule,
    PayementListModule,
    RouterModule.forChild(routes),
    FormsModule
  ]
})

export class AddedOffersModule { }
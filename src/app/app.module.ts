import {NgModule} from '@angular/core';
import {AppComponent} from "./app.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {StoreService} from "./shared/services/store.service";
import {BackendService} from "./shared/services/backend.service";
import { ListIconService } from './shared/services/list.service';
import { ProfilIconService } from './shared/modules/users-cards/services/profilIcon.service';


@NgModule({
  declarations: [
    AppComponent,
  ],
  exports: [],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule
  ],
  providers:[
    provideAnimationsAsync(),
    StoreService,
    BackendService,
    ListIconService,
    ProfilIconService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}

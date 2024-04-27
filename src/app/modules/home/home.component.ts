import { Component, OnDestroy, OnInit } from '@angular/core';
import { BackendService } from "../../shared/services/backend.service";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy {
  private rulesSubscription: Subscription;
  constructor(
    private backendService: BackendService
  ) { }
  ngOnInit() {
    this.initializeUserData();
    this.initializePeymentList();
  }

  private initializeUserData() {
    const localId = JSON.parse(localStorage.getItem('userData'));
    this.backendService.getUserProfile(localId.localId);
  }

  private initializePeymentList() {
    const localId = JSON.parse(localStorage.getItem('userData'));
    // this.backendService.getPeyementList(localId.localId);
    // this.backendService.getPeyementUsersListComplete(localId.localId);
    // this.backendService.getPeyementUsersList(localId.localId);
    this.backendService.getNewUsersCard(localId.localId);
    this.backendService.getUserCardsHistory(localId.localId);
    //
    this.backendService.getOffers(localId.localId);
  }


  ngOnDestroy(): void {
    this.rulesSubscription.unsubscribe();
  }
}

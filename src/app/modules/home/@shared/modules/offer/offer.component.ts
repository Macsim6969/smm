import { Component, OnDestroy, OnInit } from '@angular/core';
import { ListIconService } from '../../../../../shared/modules/payement-list/list.service';
import { StoreService } from '../../../../../shared/services/store.service';
import { Subscription } from 'rxjs';
import { PeyementList } from '../../../../../shared/interfaces/backend.interface';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrl: './offer.component.scss'
})
export class OfferComponent implements OnInit, OnDestroy {
  public peyementUsersList: PeyementList[];
  public rules: 'manager' | 'brand' | 'afiliat';

  private rulesSubscription: Subscription;
  private offersSubscription: Subscription
  constructor(
    private listIconService: ListIconService,
    private store: StoreService
  ) { }
  ngOnInit() {
    this.getDataRulesFromStore();
    this.getOffersFromStore()
  }

  private getDataRulesFromStore() {
    this.rulesSubscription = this.store._whosePage$.subscribe((data) => {
      this.rules = data;

    });
  }


  private getOffersFromStore() {
    this.offersSubscription = this.store._offer$.subscribe((data: PeyementList[]) => {
      if (data) {
        this.peyementUsersList = Object.values(data);
      }
    })
  }

  ngOnDestroy() {
    this.offersSubscription.unsubscribe();
    this.rulesSubscription.unsubscribe();
  }
}
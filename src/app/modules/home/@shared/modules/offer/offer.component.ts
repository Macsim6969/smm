import { Component, OnDestroy, OnInit } from '@angular/core';
import { StoreService } from '../../../../../shared/services/store.service';
import { Subscription } from 'rxjs';
import { PeyementList } from '../../../../../shared/interfaces/backend.interface';
import { ListIconService } from '../../../../../shared/services/list.service';

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
        this.peyementUsersList = Object.values(data).filter((data) => data.status !== 'active' && data.status !== 'inWork');
      }
    })
  }

  ngOnDestroy() {
    this.offersSubscription.unsubscribe();
    this.rulesSubscription.unsubscribe();
  }
}
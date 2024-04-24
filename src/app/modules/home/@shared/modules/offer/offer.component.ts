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

  private payementSubscription: Subscription;
  constructor(
    private listIconService: ListIconService,
    private store: StoreService
  ) { }
  ngOnInit() {
    this.getPeymentListFromStore();
  }

  private getPeymentListFromStore() {
    this.payementSubscription = this.store._payementUsersList$.subscribe((data: PeyementList[]) => {
      if (data) {
        this.peyementUsersList = (data);
      }

    })
  }

  ngOnDestroy() {
    this.payementSubscription.unsubscribe();
  }
}
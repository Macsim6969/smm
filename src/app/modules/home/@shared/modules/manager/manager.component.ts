import { Component, OnDestroy, OnInit } from '@angular/core';
import { PeyementList } from "../../../../../shared/interfaces/backend.interface";
import { Subscription } from "rxjs";
import { StoreService } from "../../../../../shared/services/store.service";
import { ListIconService } from '../../../../../shared/services/list.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrl: './manager.component.scss'
})
export class ManagerComponent implements OnInit, OnDestroy {
  public peyementList: PeyementList[];
  public rules: 'manager' | 'brand' | 'afiliat';
  private payementSubscription: Subscription;
  private rulesSubscription: Subscription;

  constructor(
    private listIconService: ListIconService,
    private store: StoreService
  ) {
  }

  ngOnInit() {
    this.getDataRulesFromStore();
    this.getPeymentListFromStore();
  }

  private getDataRulesFromStore() {
    this.rulesSubscription = this.store._whosePage$.subscribe((data) => {
      this.rules = data;
    });
  }

  private getPeymentListFromStore() {
    this.payementSubscription = this.store._offer$.subscribe((data: PeyementList[]) => {
      if (data) {
        this.peyementList = Object.values(data).filter((data) => data.status === 'active');
      }

    })
  }

  ngOnDestroy() {
    this.payementSubscription.unsubscribe();
    this.rulesSubscription.unsubscribe();
  }
}

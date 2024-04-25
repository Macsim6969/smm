import { Component, OnDestroy, OnInit } from '@angular/core';
import { PeyementList } from "../../../../../shared/interfaces/backend.interface";
import { Subscription } from "rxjs";
import { ListIconService } from "../../../../../shared/modules/payement-list/list.service";
import { StoreService } from "../../../../../shared/services/store.service";

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
    this.rulesSubscription = this.store._whosePage$.subscribe((data) => {
      this.rules = data;
    });
    console.log(this.store._whosePage)
    this.getPeymentListFromStore();
  }

  private getPeymentListFromStore() {
    this.payementSubscription = this.store._payementList$.subscribe((data: PeyementList[]) => {
      if (data) {
        this.peyementList = data;
      }

    })
  }

  ngOnDestroy() {
    this.payementSubscription.unsubscribe();
    this.rulesSubscription.unsubscribe();
  }
}

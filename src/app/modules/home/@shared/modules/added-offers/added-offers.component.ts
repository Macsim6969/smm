import { Component } from '@angular/core';
import { PeyementList } from '../../../../../shared/interfaces/backend.interface';
import { Subscription } from 'rxjs';
import { ListIconService } from '../../../../../shared/modules/payement-list/list.service';
import { StoreService } from '../../../../../shared/services/store.service';

@Component({
  selector: 'app-added-offers',
  templateUrl: './added-offers.component.html',
  styleUrl: './added-offers.component.scss'
})
export class AddedOffersComponent {
  public peyementUsersList: PeyementList[];
  public rules: 'manager' | 'brand' | 'afiliat';

  private rulesSubscription: Subscription;
  private payementSubscription: Subscription;
  constructor(
    private listIconService: ListIconService,
    private store: StoreService
  ) { }

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
      console.log(data);
      if (data) {
        this.peyementUsersList = Object.values(data).filter((data) => data.status === 'inWork');
      }

    })
  }

  ngOnDestroy() {
    this.payementSubscription.unsubscribe();
    this.rulesSubscription.unsubscribe();
  }

}

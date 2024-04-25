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

  private payementSubscription: Subscription;
  constructor(
    private listIconService: ListIconService,
    private store: StoreService
  ) { }
  ngOnInit() {
    this.getPeymentListFromStore();
  }

  private getPeymentListFromStore() {
    this.payementSubscription = this.store._payementUsersListComplete$.subscribe((data: PeyementList[]) => {
      console.log(data);
      if (data) {
        this.peyementUsersList = Object.values(data);
      }

    })
  }

  ngOnDestroy() {
    this.payementSubscription.unsubscribe();
  }

}

import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {ListIconService} from "../../../../../shared/modules/payement-list/list.service";
import {StoreService} from "../../../../../shared/services/store.service";
import {PeyementList} from "../../../../../shared/interfaces/backend.interface";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit, OnDestroy{
  public peyementUsersList: PeyementList[];
  public rules: 'manager' | 'brand' | 'afiliat';
  private payementSubscription: Subscription;
  private rulesSubscription: Subscription;
  constructor(
    private listIconService: ListIconService,
    private store: StoreService
  ) {}
  ngOnInit() {
    this.getPeymentListFromStore();
    this.getDataRulesFromStore();
  }

  private getPeymentListFromStore(){
    this.payementSubscription = this.store._payementUsersListComplete$.subscribe((data: PeyementList[]) =>{
      if(data){
        this.peyementUsersList = Object.values(data);
      }

    }) 
  }

  private getDataRulesFromStore() {
    this.rulesSubscription = this.store._whosePage$.subscribe((data) => {
      this.rules = data;

    });
  }

  ngOnDestroy() {
    this.payementSubscription.unsubscribe();
  }
}

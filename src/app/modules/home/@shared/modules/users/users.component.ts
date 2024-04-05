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

  private payementSubscription: Subscription;
  constructor(
    private listIconService: ListIconService,
    private store: StoreService
  ) {}
  ngOnInit() {
    this.getPeymentListFromStore();
  }

  private getPeymentListFromStore(){
    this.payementSubscription = this.store._payementUsersList$.subscribe((data: PeyementList[]) =>{
      if(data){
        this.peyementUsersList = Object.values(Object.values(data)[0]);
      }

    })
  }

  ngOnDestroy() {
    this.payementSubscription.unsubscribe();
  }
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from "rxjs";
import { StoreService } from "../../../../../shared/services/store.service";
import { PeyementList } from "../../../../../shared/interfaces/backend.interface";
import { ListIconService } from '../../../../../shared/services/list.service';
import { BackendService } from '../../../../../shared/services/backend.service';
import { Users, UsersList } from './@shared/interface/user.interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit, OnDestroy {
  public usersList: UsersList[] | any;
  private payementSubscription: Subscription;
  public isLoading: boolean = true;
  constructor(
    private listIconService: ListIconService,
    private store: StoreService,
    private backend: BackendService
  ) { }
  ngOnInit() {

    this.payementSubscription = this.backend.getAllUsers()
    this.store._allUsers$.subscribe((data) => {
      this.usersList = data;
      this.isLoading = false;
    })
  }

  ngOnDestroy() {
    this.payementSubscription.unsubscribe();
  }
}

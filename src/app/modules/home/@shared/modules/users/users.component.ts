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
  constructor(
    private listIconService: ListIconService,
    private store: StoreService,
    private backend: BackendService
  ) { }
  ngOnInit() {

    this.payementSubscription = this.backend.getAllUsers().subscribe((data) => {
      const usersArray = Object.values(data).map(obj => {
        const profileValues = Object.values(obj.profile);
        if (profileValues.length === 1) {
          return profileValues[0];
        } else {
          return obj.profile;
        }
      });
      console.log(usersArray);
      this.usersList = usersArray;
    });
  }


  ngOnDestroy() {
    this.payementSubscription.unsubscribe();
  }
}

import {Component, OnDestroy, OnInit} from '@angular/core';
import {StoreService} from "../../services/store.service";
import {UserData} from "../../interfaces/backend.interface";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit, OnDestroy {
  public userData: UserData;
  private userDataSubscription: Subscription;

  constructor(
    private store: StoreService
  ) {}

  ngOnInit() {
    this.getUserDataFromStore();
  }


  private getUserDataFromStore() {
    this.userDataSubscription = this.store._userData$.subscribe((data: UserData) => {
      data ? this.userData = Object.values(data)[0]: null;
    })
  }

  ngOnDestroy() {
    this.userDataSubscription.unsubscribe();
  }
}

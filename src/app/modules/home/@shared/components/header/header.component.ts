import { Component, OnDestroy, OnInit } from '@angular/core';
import { SidebarIconService } from "../../services/sidebarIcon.service";
import { StoreService } from '../../../../../shared/services/store.service';
import { UsersList } from '../../modules/users/@shared/interface/user.interface';
import { Subscription } from 'rxjs';
import { PeyementList } from '../../../../../shared/interfaces/backend.interface';
import { BackendService } from '../../../../../shared/services/backend.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit, OnDestroy {
  public decommissioned: number = 0;
  public clicks: number = 0;
  public balanc: number = 0;
  public usersInfo: UsersList;
  public rules: 'manager' | 'brand' | 'afiliat';
  private userSubscription: Subscription;
  private offerSubscripption: Subscription;
  private rulesSubscription: Subscription;

  constructor(
    private sidebarIcon: SidebarIconService,
    private store: StoreService,
    private backendService: BackendService
  ) { }

  ngOnInit(): void {
    this.getUserDataFromStore();
    this.getUserOffers();
    this.getRulesDataFromStore();
  }

  private getUserDataFromStore() {
    this.userSubscription = this.store._userData$.subscribe((user: UsersList) => {
      this.usersInfo = user;
    })
  }

  private getUserOffers() {
    this.offerSubscripption = this.store._offer$.subscribe((offer: PeyementList[]) => {
      this.decommissioned = Object.values(offer).reduce((sum, item) => sum + item.oscillate, 0);
      this.balanc = Object.values(offer).reduce((sum, item) => sum + item.pay, 0);
      let clicks = this.decommissioned / Object.values(offer).length;
      this.clicks = parseFloat(clicks.toFixed(1));

      if (this.usersInfo) {
        this.serndDataToStore();
      }
    })
  }

  private getRulesDataFromStore() {
    this.rulesSubscription = this.store._whosePage$.subscribe((data) => {
      this.rules = data;
    })
  }

  private serndDataToStore() {
    const userData = {
      ...this.usersInfo,
      clicks: this.clicks,
      decommissioned: this.decommissioned,
      balanc: this.balanc

    }
    this.backendService.sendUserProfile(userData).add(() => {
      this.backendService.getAllUsers()
    })
  }


  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
    this.offerSubscripption.unsubscribe();
    this.rulesSubscription.unsubscribe();
  }
}

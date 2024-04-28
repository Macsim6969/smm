import { Component, OnDestroy, OnInit } from '@angular/core';
import { BackendService } from "../../shared/services/backend.service";
import { Subscription, filter, of, take } from 'rxjs';
import { StoreService } from '../../shared/services/store.service';
import { ActivatedRoute, Navigation, NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy {
  private rulesSubscription: Subscription;
  constructor(
    private backendService: BackendService,
    private store: StoreService,
    private router: Router,
    private route: ActivatedRoute
  ) { }
  ngOnInit() {
    this.initializeUserData();
    this.initializePeymentList();
    this.checkRouterPath();

  }

  private checkRouterPath() {
    this.router.events.subscribe((event) => {
      if (event['routerEvent'].url === '/manager') {
        console.log(event['routerEvent'].url)
        this.checkWhosePageActive();
      }
    });
  }

  private checkWhosePageActive() {
    this.store._whosePage$.pipe(take(2)).subscribe((data) => {
      if (data === 'manager') {
        this.router.navigate(['/manager']).then();
      } else if (data === 'brand') {
        this.router.navigate(['/marka']).then();
      } else if (data === 'afiliat') {
        this.router.navigate(['/affiliate']).then();
      }
    });

  }


  private initializeUserData() {
    const localId = JSON.parse(localStorage.getItem('userData'));
    this.backendService.getUserProfile(localId.localId);
  }

  private initializePeymentList() {
    const localId = JSON.parse(localStorage.getItem('userData'));
    this.backendService.getNewUsersCard(localId.localId);
    this.backendService.getUserCardsHistory(localId.localId);
    //
    this.backendService.getOffers(localId.localId);
  }


  ngOnDestroy(): void {
    this.rulesSubscription.unsubscribe();
  }
}

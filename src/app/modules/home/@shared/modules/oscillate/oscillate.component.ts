import {Component, OnDestroy, OnInit} from '@angular/core';
import {CardHistory} from "../../../../../shared/interfaces/card.interface";
import {StoreService} from "../../../../../shared/services/store.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-oscillate',
  templateUrl: './oscillate.component.html',
  styleUrl: './oscillate.component.scss'
})
export class OscillateComponent implements OnInit, OnDestroy{

  public historyListALlCard: CardHistory[];
  private historyListSubscription: Subscription;
  constructor(
    private store: StoreService
  ) {
  }
  ngOnInit() {
    this.initializeHistoryList();
  }

  private initializeHistoryList() {
    this.historyListSubscription = this.store._userCardsHistory$.subscribe((data: CardHistory[]) => {
      this.historyListALlCard = data;
    })
  }

  ngOnDestroy() {
    this.historyListSubscription.unsubscribe();
  }
}

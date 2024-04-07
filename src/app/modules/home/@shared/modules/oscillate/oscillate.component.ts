import {Component, OnDestroy, OnInit} from '@angular/core';
import {CardHistory} from "../../../../../shared/interfaces/card.interface";
import {StoreService} from "../../../../../shared/services/store.service";
import {Subscription} from "rxjs";
import {HistoryService} from "./@shared/services/history.service";

@Component({
  selector: 'app-oscillate',
  templateUrl: './oscillate.component.html',
  styleUrl: './oscillate.component.scss'
})
export class OscillateComponent implements OnInit, OnDestroy{
  private historyListSubscription: Subscription;

  public activeUSCard: number
  constructor(
    private store: StoreService,
    private historyService: HistoryService
  ) {
  }
  ngOnInit() {
    this.initializeHistoryList();
  }

  private initializeHistoryList() {
    this.historyListSubscription = this.store._userCardsHistory$.subscribe((data: CardHistory[]) => {
      this.historyService._historyCard = data;
    })
  }

  ngOnDestroy() {
    this.historyListSubscription.unsubscribe();
  }
}

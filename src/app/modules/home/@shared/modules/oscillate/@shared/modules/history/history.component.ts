import {Component, OnDestroy, OnInit} from '@angular/core';
import {StoreService} from "../../../../../../../../shared/services/store.service";
import {Subscription} from "rxjs";
import {CardHistory} from "../../../../../../../../shared/interfaces/card.interface";
import {UsersCardsService} from "../../../../../../../../shared/services/usersCards.service";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrl: './history.component.scss'
})
export class HistoryComponent implements OnInit, OnDestroy {
  public historyListALlCard: any;
  public historyList: CardHistory[]
  public activeCard: number = 0
  private historyListSubscription: Subscription;

  constructor(
    private store: StoreService,
    private usersCards: UsersCardsService
  ) {
  }

  ngOnInit() {
    this.usersCards._userActiveCard$.subscribe(data => {
      this.activeCard = data;
      this.changeCard(data);
    })
    this.initializeHistoryList();
  }

  public changeCard(id: number) {
    this.historyList = this.historyListALlCard[this.activeCard]
  }

  ngOnDestroy() {
    this.historyListSubscription.unsubscribe();
  }

  private initializeHistoryList() {

    this.historyListSubscription = this.store._userCardsHistory$.subscribe((data: CardHistory[]) => {
      console.log(data[this.activeCard])

      this.historyListALlCard = data;
      this.historyList = Object.values(data[this.activeCard]);

    })
  }


}

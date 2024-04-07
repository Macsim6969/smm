import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {CardHistory} from "../../../../../../../../shared/interfaces/card.interface";
import {UsersCardsService} from "../../../../../../../../shared/services/usersCards.service";
import {HistoryService} from "../../services/history.service";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrl: './history.component.scss'
})
export class HistoryComponent implements OnInit, OnDestroy {
  public historyListALlCard: any;
  public historyList: CardHistory[] | any;
  public activeCard: number = 0;

  private userHistoryListSubscription: Subscription;
  private userActiveCardSubscription: Subscription;
  constructor(
    private usersCards: UsersCardsService,
    private historyService: HistoryService
  ) {
  }

  ngOnInit() {
    this.streamUserListHistory();
    this.streamUserActiveCards();
  }

  private streamUserListHistory(){
  this.userHistoryListSubscription =  this.historyService._historyCard$.subscribe((data) =>{
      this.historyListALlCard = data;
      this.historyList = Object.values(data)[0];
    })
  }
  private streamUserActiveCards(){
    this.userActiveCardSubscription = this.usersCards._userActiveCard$.subscribe(data => {
      this.activeCard = data;
      this.changeCard();
    })
  }


  public changeCard() {
    this.historyList = this.historyListALlCard[this.activeCard];
  }

  ngOnDestroy() {
    this.userHistoryListSubscription.unsubscribe();
    this.userActiveCardSubscription.unsubscribe();
  }


}

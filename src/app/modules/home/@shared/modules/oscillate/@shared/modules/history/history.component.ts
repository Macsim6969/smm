import {Component, OnDestroy, OnInit, Input} from '@angular/core';
import {Subscription} from "rxjs";
import {CardHistory} from "../../../../../../../../shared/interfaces/card.interface";
import {UsersCardsService} from "../../../../../../../../shared/services/usersCards.service";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrl: './history.component.scss'
})
export class HistoryComponent implements OnInit, OnDestroy {
  @Input() public historyListALlCard: any;
  public historyList: CardHistory[]
  public activeCard: number = 0

  private userActiveCardSubscription: Subscription;
  constructor(
    private usersCards: UsersCardsService
  ) {
  }

  ngOnInit() {
   this.userActiveCardSubscription = this.usersCards._userActiveCard$.subscribe(data => {
      this.activeCard = data;
      this.changeCard(data);
    })


  }


  public changeCard(id: number) {
    this.historyList = this.historyListALlCard[this.activeCard];
  }

  ngOnDestroy() {
    this.userActiveCardSubscription.unsubscribe();
  }


}

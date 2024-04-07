import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {CardInterface} from "../../interfaces/card.interface";
import {ProfilIconService} from "./services/profilIcon.service";
import {StoreService} from "../../services/store.service";
import {UsersCardsService} from "../../services/usersCards.service";
import {Router} from "@angular/router";
import {Observable, Subscription, timer} from "rxjs";

@Component({
  selector: 'app-users-cards',
  templateUrl: './users-cards.component.html',
  styleUrl: './users-cards.component.scss'
})
export class UsersCardsComponent implements OnInit, OnDestroy {
   @Input() public isProfile: boolean;
  public cardPopup: boolean = false
  public cards: CardInterface[];
  public activeCard: number = 0;

private userCardsSubscription: Subscription;
  constructor(private profilIcon: ProfilIconService,
              private store: StoreService,
              private usersCard: UsersCardsService,
              private router:Router) {
  }

  ngOnInit() {
    this.getCardUsers();
  }

  private getCardUsers() {
    this.userCardsSubscription = this.store._userCards$.subscribe((data: CardInterface[]) => {
      this.cards = data;
    })
  }

  public choiceCard(id: number, idCard: number) {
    this.usersCard._userActiveCard = id;
    this.activeCard = idCard;
      if(this.isProfile){
        this.router.navigate(['/oscillate']).then();
      }
  }

  public closePopup(event: boolean) {
    this.cardPopup = event
  }

  public copyToClipboard(text: number): void {
    const textField = document.createElement('textarea');
    textField.innerText = text.toString();
    document.body.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    textField.remove();
  }

  public openCardPopup() {
    document.body.style.overflow = 'hidden';
    this.cardPopup = true;
  }

  ngOnDestroy() {
    this.userCardsSubscription.unsubscribe();
  }

}

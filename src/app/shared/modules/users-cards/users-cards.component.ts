import {Component, OnInit} from '@angular/core';
import {CardInterface} from "../../interfaces/card.interface";
import {ProfilIconService} from "./services/profilIcon.service";
import {StoreService} from "../../services/store.service";
import {UsersCardsService} from "../../services/usersCards.service";

@Component({
  selector: 'app-users-cards',
  templateUrl: './users-cards.component.html',
  styleUrl: './users-cards.component.scss'
})
export class UsersCardsComponent implements OnInit {
  public cardPopup: boolean = false
  public cards: CardInterface[];

  constructor(private profilIcon: ProfilIconService,
              private store: StoreService,
              private usersCard: UsersCardsService) {
  }

  ngOnInit() {
    this.getCardUsers();
  }

  public choiceCard(id: number) {
    this.usersCard._userActiveCard = id;
  }

  public closePopup(event: boolean) {
    this.cardPopup = event
  }

  copyToClipboard(text: number): void {
    const textField = document.createElement('textarea');
    textField.innerText = text.toString(); // Преобразуем число в строку
    document.body.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    textField.remove();
  }

  public openCardPopup() {
    document.body.style.overflow = 'hidden';
    this.cardPopup = true;
  }

  private getCardUsers() {
    this.store._userCards$.subscribe((data: CardInterface[]) => {
      this.cards = data;
      this.usersCard._userActiveCard = data[0].cvc;
    })
  }

}

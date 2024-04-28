import { Component, Input, OnInit } from '@angular/core';
import { PopupOfferService } from '../../services/popup-offer.service';
import { UsersSearchService } from '../../services/usersSearch.service';

@Component({
  selector: 'app-users-search',
  templateUrl: './users-search.component.html',
  styleUrl: './users-search.component.scss'
})
export class UsersSearchComponent {
  @Input() public rules: 'manager' | 'brand' | 'afiliat';
  public searchText: string;

  constructor(
    private userSearch: UsersSearchService,
    private isPopupOffer: PopupOfferService
  ) { }

  public sendSearch() {
    this.userSearch._searchText = this.searchText;
  }

  public addedOffers() {
    if (this.rules !== 'afiliat') {
      this.isPopupOffer._isOfferPopup = true;
    }
  }
}

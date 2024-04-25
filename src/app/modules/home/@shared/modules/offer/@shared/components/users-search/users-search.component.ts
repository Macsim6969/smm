import { Component, Input, OnInit } from '@angular/core';
import { UsersSearchService } from '../../../../../../../../shared/services/usersSearch.service';
import { PopupOfferService } from '../../../../../../../../shared/services/popup-offer.service';

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

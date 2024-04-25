import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { BackendService } from '../../services/backend.service';
import { PopupOfferService } from '../../services/popup-offer.service';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-popup-offers',
  templateUrl: './popup-offers.component.html',
  styleUrl: './popup-offers.component.scss'
})
export class PopupOffersComponent {
  public isPopup: boolean;
  public form: FormGroup
  constructor(
    private backEndService: BackendService,
    private isPopupService: PopupOfferService,
    private backend: BackendService,
    private store: StoreService
  ) { }

  ngOnInit() {
    this.initializeForm();
    this.streamDataPopupOffersFromStore();
  }

  private streamDataPopupOffersFromStore() {
    this.isPopupService._isOfferPopup$.subscribe((data) => {
      this.isPopup = data;
    })
  }
  private initializeForm() {
    this.form = new FormGroup<any>({
      name: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required]),
      oscillate: new FormControl('', [Validators.required]),
      pay: new FormControl('', [Validators.required]),
      status: new FormControl('', [Validators.required])
    })
  }

  public closePopup() {
    this.isPopupService._isOfferPopup = false;
  }

  public addNewCard() {
    let lenght
    this.store._offer$.subscribe((data) => lenght = Object.values(data).length)

    const formData = { ...this.form.value };
    const localId = JSON.parse(localStorage.getItem('userData'));

    formData['UI_id'] = lenght + 1;
    this.backend.sendOffer(localId.localId, formData);
    this.isPopupService._isOfferPopup = false;
  }

}

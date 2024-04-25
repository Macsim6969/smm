import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { BackendService } from '../../services/backend.service';

@Component({
  selector: 'app-popup-offers',
  templateUrl: './popup-offers.component.html',
  styleUrl: './popup-offers.component.scss'
})
export class PopupOffersComponent {
  @Output() public close: EventEmitter<boolean> = new EventEmitter<boolean>();

  public form: FormGroup
  constructor(
    private backEndService: BackendService
  ) { }

  ngOnInit() {
    this.initializeForm();
  }
  private initializeForm() {
    this.form = new FormGroup<any>({
      number: new FormControl('', [Validators.required, Validators.minLength(16), Validators.maxLength(16)]),
      name: new FormControl('', [Validators.required]),
      cvc: new FormControl('', [Validators.required, Validators.maxLength(3)]),
      data: new FormControl('', [Validators.required])
    })
  }

  public closePopup() {
    this.close.emit(false);
  }

  public addNewCard() {
    const formData = { ...this.form.value }
    const localId = JSON.parse(localStorage.getItem('userData'));
    this.backEndService.sendNewUserCard(localId.localId, formData);
    this.close.emit(false);
  }
}

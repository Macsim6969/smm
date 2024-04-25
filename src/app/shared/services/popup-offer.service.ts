import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";


@Injectable()

export class PopupOfferService{
  
  isPopupOfferSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  set _isOfferPopup(value: boolean){
    this.isPopupOfferSubject.next(value);
  }

  get _isOfferPopup$(){
    return this.isPopupOfferSubject;
  }

}
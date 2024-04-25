import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";


@Injectable()

export class PopupOfferService{
  
  isPopupOfferSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  userDataSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  set _isOfferPopup(value: boolean){
    this.isPopupOfferSubject.next(value);
  }

  get _isOfferPopup$(){
    return this.isPopupOfferSubject;
  }

  set _userData(value: boolean){
    this.userDataSubject.next(value);
  }

  get _userData$(){
    return this.userDataSubject;
  }

}
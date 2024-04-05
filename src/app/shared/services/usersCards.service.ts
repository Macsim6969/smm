import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";


@Injectable()

export class UsersCardsService {
  private userActiveCardSubject: BehaviorSubject<number> = new BehaviorSubject<number>(null);

  set _userActiveCard(newCardId: number){
    console.log(newCardId)
    this.userActiveCardSubject.next(newCardId);
  }

  get _userActiveCard$(){
    return this.userActiveCardSubject;
  }
}

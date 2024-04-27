import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { PeyementList, UserData } from "../interfaces/backend.interface";
import { CardHistory, CardInterface } from "../interfaces/card.interface";
import { Users } from "../../modules/home/@shared/modules/users/@shared/interface/user.interface";

export interface whosePage {
  rules: 'manager' | 'brand' | 'afiliat'
}
@Injectable()

export class StoreService {
  private whosePageSubject: BehaviorSubject<'manager' | 'brand' | 'afiliat'> = new BehaviorSubject<'manager' | 'brand' | 'afiliat'>(null);
  private idUserSubject: BehaviorSubject<string> = new BehaviorSubject<string>(null);
  private userDataSubject: BehaviorSubject<UserData> = new BehaviorSubject<UserData>(null);
 
  private usersCardsSubject: BehaviorSubject<CardInterface[]> = new BehaviorSubject<CardInterface[]>([]);
  private usersCardsHistorySubject: BehaviorSubject<CardHistory[]> = new BehaviorSubject<CardHistory[]>([]);

  private offersSubject: BehaviorSubject<PeyementList[]> = new BehaviorSubject<PeyementList[]>([]);

  private allUsersSubject: BehaviorSubject<Users[]> = new BehaviorSubject<Users[]>(null);

  set _whosePage(newId: 'manager' | 'brand' | 'afiliat') {
    this.whosePageSubject.next(newId);
  }

  get _whosePage$() {
    return this.whosePageSubject;
  }

  set _idUser(newId: string) {
    this.idUserSubject.next(newId);
  }

  get _idUser$() {
    return this.idUserSubject;
  }

  set _userData(newUser: UserData) {
    this.userDataSubject.next(newUser);
  }

  get _userData$() {
    return this.userDataSubject;
  }


  set _userCards(newCard: CardInterface[]) {
    this.usersCardsSubject.next(newCard);
  }

  get _userCards$() {
    return this.usersCardsSubject;
  }

  set _userCardsHistory(newCard: CardHistory[]) {
    this.usersCardsHistorySubject.next(newCard);
  }

  get _userCardsHistory$() {
    return this.usersCardsHistorySubject;
  }

  ///
  set _offer(newOffer: PeyementList[]) {
    this.offersSubject.next(newOffer);
  }

  get _offer$() {
    return this.offersSubject;
  }

  set _allUsers(newOffer: Users[]) {
    this.allUsersSubject.next(newOffer);
  }

  get _allUsers$() {
    return this.allUsersSubject;
  }
}

import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {PeyementList, UserData} from "../interfaces/backend.interface";
import {CardHistory, CardInterface} from "../interfaces/card.interface";


@Injectable()

export class StoreService {
  private whosePage: BehaviorSubject<'manager' | 'brand' | 'afiliat'> = new BehaviorSubject<'manager' | 'brand' | 'afiliat'>(null);
  private idUserSubject: BehaviorSubject<string> = new BehaviorSubject<string>(null);
  private userDataSubject: BehaviorSubject<UserData> = new BehaviorSubject<UserData>(null);
  private paymentListsSubject: BehaviorSubject<PeyementList[]> = new BehaviorSubject<PeyementList[]>(null);
  private paymentUsersListsCompleteSubject: BehaviorSubject<PeyementList[]> = new BehaviorSubject<PeyementList[]>(null);
  private paymentUsersListsSubject: BehaviorSubject<PeyementList[]> = new BehaviorSubject<PeyementList[]>(null);
  private usersCardsSubject: BehaviorSubject<CardInterface[]> = new BehaviorSubject<CardInterface[]>([]);
  private usersCardsHistorySubject: BehaviorSubject<CardHistory[]> = new BehaviorSubject<CardHistory[]>([]);
  set _idUser(newId: string){
    this.idUserSubject.next(newId);
  }

  get _idUser$(){
    return this.idUserSubject;
  }

  set _userData(newUser: UserData){
    this.userDataSubject.next(newUser);
  }

  get _userData$(){
    return this.userDataSubject;
  }

  set _payementList(newLists: PeyementList[]){
    this.paymentListsSubject.next(newLists);
  }

  get _payementList$(){
    return this.paymentListsSubject;
  }

  set _payemenUserstListComplete(newLists: PeyementList[]){
    this.paymentUsersListsCompleteSubject.next(newLists);
  }

  get _payementUsersListComplete$(){
    return this.paymentUsersListsCompleteSubject;
  }


  set _payemenUserstList(newLists: PeyementList[]){
    this.paymentUsersListsSubject.next(newLists);
  }

  get _payementUsersList$(){
    return this.paymentUsersListsSubject;
  }

  set _userCards(newCard: CardInterface[]) {
    this.usersCardsSubject.next(newCard);
  }

  get _userCards$(){
    return this.usersCardsSubject;
  }

  set _userCardsHistory(newCard: CardHistory[]) {
    this.usersCardsHistorySubject.next(newCard);
  }

  get _userCardsHistory$(){
    return this.usersCardsHistorySubject;
  }
}

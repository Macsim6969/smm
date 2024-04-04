import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {PeyementList, UserData} from "../interfaces/backend.interface";


@Injectable()

export class StoreService {
  private idUserSubject: BehaviorSubject<string> = new BehaviorSubject<string>(null);
  private userDataSubject: BehaviorSubject<UserData> = new BehaviorSubject<UserData>(null);
  private paymentListsSubject: BehaviorSubject<PeyementList[]> = new BehaviorSubject<PeyementList[]>(null);
  private paymentUsersListsSubject: BehaviorSubject<PeyementList[]> = new BehaviorSubject<PeyementList[]>(null);
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

  set _payemenUserstList(newLists: PeyementList[]){
    this.paymentUsersListsSubject.next(newLists);
  }

  get _payementUsersList$(){
    return this.paymentUsersListsSubject;
  }
}

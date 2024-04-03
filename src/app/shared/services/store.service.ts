import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {UserData} from "../interfaces/backend.interface";


@Injectable()

export class StoreService {
  private idUserSubject: BehaviorSubject<string> = new BehaviorSubject<string>(null);
  private userDataSubject: BehaviorSubject<UserData> = new BehaviorSubject<UserData>(null);

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
}

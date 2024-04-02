import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";


@Injectable()

export class StoreService {
  private idUserSubject: BehaviorSubject<string> = new BehaviorSubject<string>(null);

  set _idUser(newId: string){
    this.idUserSubject.next(newId);
  }

  get _idUser$(){
    return this.idUserSubject;
  }
}

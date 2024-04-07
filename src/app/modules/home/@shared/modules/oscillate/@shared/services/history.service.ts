import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {CardHistory} from "../../../../../../../shared/interfaces/card.interface";

@Injectable()

export class HistoryService {
  private historyCardSubject: BehaviorSubject<CardHistory[]> = new BehaviorSubject<CardHistory[]>([]);

  set _historyCard(newHistory: CardHistory[]){
    this.historyCardSubject.next(newHistory);
  }

  get _historyCard$(){
    return this.historyCardSubject;
  }
}

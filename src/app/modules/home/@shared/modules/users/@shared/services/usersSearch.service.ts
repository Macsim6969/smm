import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";

@Injectable()

export class UsersSearchService{
  private searchTextSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');

  get _searchText$(){
    return this.searchTextSubject;
  }

  set _searchText(newText: string){
    this.searchTextSubject.next(newText);
  }
}

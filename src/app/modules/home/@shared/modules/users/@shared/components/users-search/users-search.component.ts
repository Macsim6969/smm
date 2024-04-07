import {Component, OnInit} from '@angular/core';
import {UsersSearchService} from "../../services/usersSearch.service";

@Component({
  selector: 'app-users-search',
  templateUrl: './users-search.component.html',
  styleUrl: './users-search.component.scss'
})
export class UsersSearchComponent{
 public searchText: string

  constructor(
    private userSearch: UsersSearchService
  ) {}

  public sendSearch(){
    this.userSearch._searchText = this.searchText;
    console.log(this.searchText)
  }

}

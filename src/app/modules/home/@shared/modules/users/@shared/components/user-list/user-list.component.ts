import { ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UsersSearchService } from '../../../../../../../../shared/services/usersSearch.service';
import { BackendService } from '../../../../../../../../shared/services/backend.service';
import { ListIconService } from '../../../../../../../../shared/services/list.service';
import { UsersList } from '../../interface/user.interface';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent implements OnInit, OnDestroy {
  @Input() public peyementList: UsersList[];
  @Input() public isWork: boolean;
  public settingsActiveId: number;
  public localId: any;
  public searchText: string;
  public rotate: boolean;
  public isChange: boolean;
  public isActiveId: number;
  public name: string;
  public pay: number;
  private reverseSort: boolean = false;

  public isSetting: boolean
  private searchSubscription: Subscription;

  constructor(
    private listIconService: ListIconService,
    private cdr: ChangeDetectorRef,
    private userSearch: UsersSearchService,
    private backendService: BackendService
  ) { }

  ngOnInit() {
    this.localId = JSON.parse(localStorage.getItem('userData'));
    this.streamSearchText();
    console.log(this.peyementList)
  }

  private streamSearchText() {
    this.searchSubscription = this.userSearch._searchText$.subscribe((data) => this.searchText = data);
  }

  public openSettings(id: number) {
    this.isSetting = true;
    this.isActiveId = id;
  }

  public deleteUser(idUser: string){
    this.backendService.removeUserFromFirebase(idUser);
  }

 
  sortBy(field: string) {
    this.rotate = !this.rotate
    if (field === 'UI_id' || field === 'name' || field === 'brand') {
      this.sortAlphabetically(field);
    } else if (field === 'pay' || field === 'balance') {
      this.sortNumericField(field);
    }

    this.cdr.detectChanges(); // Detect changes after sorting
  }

  private sortNumericField(field: string) {
    this.peyementList.sort((a, b) => {
      const aValue = this.getFieldValue(a, field);
      const bValue = this.getFieldValue(b, field);
      return this.reverseSort ? aValue - bValue : bValue - aValue;
    });
    this.toggleSortOrder();
  }

  private sortAlphabetically(field: string) {
    this.peyementList.sort((a, b) => {
      const aValue = this.getFieldValue(a, field);
      const bValue = this.getFieldValue(b, field);
      if (typeof aValue === 'string' && typeof bValue === 'string') {
        return this.reverseSort ? bValue.localeCompare(aValue) : aValue.localeCompare(bValue);
      }
      return 0;
    });
    this.toggleSortOrder();
  }

  private toggleSortOrder() {
    this.reverseSort = !this.reverseSort;
  }

  private getFieldValue(item: UsersList, field: string): any {
    if (!item || item[field] === undefined) {
      return '';
    }
    if (field === 'pay' || field === 'balance') {
      return +item[field];
    }
    return item[field];
  }

  ngOnDestroy() {
    this.searchSubscription.unsubscribe();
  }
}
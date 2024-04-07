import {ChangeDetectorRef, Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ListIconService} from "./list.service";
import {PeyementList} from "../../interfaces/backend.interface";
import {UsersSearchService} from "../../../modules/home/@shared/modules/users/@shared/services/usersSearch.service";
import {Subscription} from "rxjs";
import {BackendService} from "../../services/backend.service";

@Component({
  selector: 'app-payement-list',
  templateUrl: './payement-list.component.html',
  styleUrls: ['./payement-list.component.scss']
})
export class PayementListComponent implements OnInit, OnDestroy {
  @Input() public peyementList: PeyementList[];
  @Input() public classUrl: string;
  public searchText: string
  public rotate: boolean;
  private reverseSort: boolean = false;

  private searchSubscription: Subscription;

  constructor(
    private listIconService: ListIconService,
    private cdr: ChangeDetectorRef,
    private userSearch: UsersSearchService,
    private backendService: BackendService
  ) {
  }

  ngOnInit() {
    this.streamSearchText();
  }

  public remove(id: number) {
    const localId = JSON.parse(localStorage.getItem('userData'));
    this.peyementList = this.peyementList.filter((data) => data.UI_id !== id);
    this.backendService.sendPeyementUsersList(localId.localId, this.peyementList);
  }

  public compleate(id) {
    const localId = JSON.parse(localStorage.getItem('userData'));
    const completeList = this.peyementList.filter((data) => data.UI_id === id)[0];
    const newComplete = {...completeList}
    this.backendService.sendPeyementUsersListToComplete(localId.localId, newComplete);
    this.remove(id);
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

  ngOnDestroy() {
    this.searchSubscription.unsubscribe();
  }

  private streamSearchText() {
    this.searchSubscription = this.userSearch._searchText$.subscribe((data) => this.searchText = data);
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

  private getFieldValue(item: PeyementList, field: string): any {
    if (!item || item[field] === undefined) {
      return '';
    }
    if (field === 'pay' || field === 'balance') {
      return +item[field];
    }
    return item[field];
  }

}

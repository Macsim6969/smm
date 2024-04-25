import { ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ListIconService } from "./list.service";
import { PeyementList } from "../../interfaces/backend.interface";
import { Subscription } from "rxjs";
import { BackendService } from "../../services/backend.service";
import { UsersSearchService } from '../../services/usersSearch.service';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-payement-list',
  templateUrl: './payement-list.component.html',
  styleUrls: ['./payement-list.component.scss']
})
export class PayementListComponent implements OnInit, OnDestroy {
  @Input() public peyementList: PeyementList[];
  @Input() public classUrl: string;
  @Input() public rules: 'manager' | 'brand' | 'afiliat';
  @Input() public isWork: boolean;
  public localId: any;
  public searchText: string;
  public rotate: boolean;
  public isChange: boolean;
  public isActiveId: number;
  public name: string;
  public pay: number;
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
    this.localId = JSON.parse(localStorage.getItem('userData'));
    this.streamSearchText();
  }

  public changeManager(id: number) {
    if (this.rules !== 'brand') {
      this.isChange = true;
      this.isActiveId = id;
    }
  }

  public removeChange(id: number) {
    this.isChange = false;
    this.isActiveId = null;
    this.pay = null;
    this.name = null;
  }

  public doneChange(id: number) {
    let index = this.peyementList.findIndex(data => data.UI_id === id);
    if (index !== -1) {

      let updatedData = { ...this.peyementList[index] };

      updatedData.name = this.name;
      updatedData.number = this.pay;
      this.peyementList[index] = updatedData;
      this.backendService.sendPeyementList(this.localId.localId, this.peyementList);
    }
    this.removeChange(id);
  }

  public removeManager(id: number) {
    if (this.rules !== 'brand') {
      this.peyementList = this.peyementList.filter((data) => data.UI_id !== id);
      this.backendService.sendPeyementList(this.localId.localId, this.peyementList);
    }
  }
  public remove(id: number) {
    if (this.rules === 'manager') {
      this.peyementList = this.peyementList.filter((data) => data.UI_id !== id);
      this.backendService.sendPeyementUsersList(this.localId.localId, this.peyementList);
    } else if (this.rules === 'afiliat' && this.isWork) {
      this.peyementList = this.peyementList.filter((data) => data.UI_id !== id);
      this.backendService.sendOffers(this.localId.localId, this.peyementList);
    }
  }

  public compleate(id) {
    if (this.rules === 'manager') {
      const completeList = this.peyementList.filter((data) => data.UI_id === id)[0];
      const newComplete = { ...completeList }
      newComplete.status = 'przyłączać'
      this.backendService.sendPeyementUsersListToComplete(this.localId.localId, newComplete);
      this.remove(id);
    } else if (this.rules === 'afiliat' && this.isWork) {
      const index = this.peyementList.findIndex(data => data.UI_id === id);
      if (index !== -1) {
        const updatedItem = { ...this.peyementList[index] };
        updatedItem.status = 'active';
        this.peyementList[index] = updatedItem;
        this.backendService.sendOffers(this.localId.localId, this.peyementList);
      }
      this.remove(id);
    }
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

  ngOnDestroy() {
    this.searchSubscription.unsubscribe();
  }
}

import {Component, Input} from '@angular/core';
import {ListIconService} from "./list.service";
import {PeyementList} from "../../interfaces/backend.interface";


@Component({
  selector: 'app-payement-list',
  templateUrl: './payement-list.component.html',
  styleUrl: './payement-list.component.scss'
})
export class PayementListComponent{
  @Input() public peyementList: PeyementList[];
  @Input() public classUrl: string

  constructor(
    private listIconService: ListIconService
  ) {}
}

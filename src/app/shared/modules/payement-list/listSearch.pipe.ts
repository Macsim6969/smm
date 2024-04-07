import { Pipe, PipeTransform } from '@angular/core';
import {PeyementList} from "../../interfaces/backend.interface";

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: PeyementList[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }

    searchText = searchText.toLowerCase();

    return items.filter(item => {
      return item.name.toLowerCase().includes(searchText);
    });
  }
}

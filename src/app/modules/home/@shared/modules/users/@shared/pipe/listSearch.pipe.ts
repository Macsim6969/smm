import { Pipe, PipeTransform } from '@angular/core';
import { PeyementList } from '../../../../../../../shared/interfaces/backend.interface';
import { UsersList } from '../interface/user.interface';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: UsersList[], searchText: string): any[] {
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

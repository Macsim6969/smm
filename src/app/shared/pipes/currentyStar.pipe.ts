import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyStar'
})
export class CurrencyStarPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if (typeof value !== 'string') {
      return value;
    }

    return value.replace(/./g, '*');
  }

}

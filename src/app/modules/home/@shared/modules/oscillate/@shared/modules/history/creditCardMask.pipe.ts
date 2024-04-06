import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'creditCardMask'
})
export class CreditCardMaskPipe implements PipeTransform {
  transform(cardNumber: string): string {
    if (!cardNumber) return '';

    const lastText = cardNumber.substring(cardNumber.lastIndexOf('('));

    cardNumber = cardNumber.substring(0, cardNumber.lastIndexOf(' '));

    const firstFourDigits = cardNumber.slice(0, 4);

    cardNumber = cardNumber.substring(4).replace(/\d{4}(?=\d)/g, '**** ');

    const formatted = firstFourDigits + ' ' + cardNumber.trim() + ' ' + lastText;

    return formatted;
  }
}

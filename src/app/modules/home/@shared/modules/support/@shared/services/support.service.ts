import {Injectable} from "@angular/core";
import {SupportInterface} from "../interface/support.interface";

@Injectable()

export class SupportService{
  public supportCards: SupportInterface[] = [
    {
      icon: 'books',
      title: 'Czy mogę dodać lub edytować więcej niż jednego użytkownika jednocześnie?',
      content: 'Ut sed orci venenatis, aliquam nunc et, tempor leo. Suspendisse dolor Massa, pellentesque vitae tempus non, tempor a Massa. Suspendisse hendrerit Massa velit, et blandit ex pulvinar in.'
    },
    {
      icon: 'albert',
      title: 'Jak edytować istniejącego użytkownika?',
      content: 'Nam nec ante et elit pulvinar placerat. Praesent lacinia purus in dui convallis placerat. Cras euismod a nisi ut elementum. Duis auctor eros ex, at pharetra arcu rhoncus id. Curabitur in enim justo. Nullam eget aliquet mauris. Nulla mattis, sem ut facilisis viverra.'
    },
    {
      icon: 'penzle',
      title: 'Jakie „dane dodatkowe” można wybrać?',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce venenatis sem eu sem porta cursus. Nam sollicitudin finibus tincidunt. '
    },
    {
      icon: 'paint',
      title: 'Jak utworzyć i zdefiniować uprawnienia dla roli?',
      content: 'Sed ut vehicula arcu, eget consequat sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam tristique et est eu vehicula. '
    },
    {
      icon: 'rocket',
      title: 'Jakie funkcje administracyjne są teraz dostępne dla RapidLite?',
      content: 'Quisque venenatis ligula et nunc aliquam, vitae blandit mi suscipit. Praesent venenatis odio nisl, id ultricies est sollicitudin vel. Ut volutpat tincidunt turpis, sed feugiat dolor euismod sit amet. Quisque non turpis id risus fringilla porttitor. Aenean vulputate lorem vel lobortis volutpat. Phasellus non ex tortor. '
    },
    {
      icon: 'stand',
      title: 'Jak korzystać z zakładki Informacje PSAP?',
      content: 'Sed metus nunc, ultrices non lacus eget, venenatis cursus neque. Fusce orci dui, bibendum eleifend nisi ut, interdum condimentum diam. Aliquam erat volutpat. Suspendisse libero tellus, dignissim pulvinar ipsum in, sagittis pretium lectus.\n' +
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce venenatis sem eu sem porta cursus.'
    }
  ]
}

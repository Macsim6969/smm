import {Injectable} from "@angular/core";
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";

@Injectable()

export class SupportIconService {
  constructor(private matIconRegistry: MatIconRegistry,
              private domSanitizer: DomSanitizer) {


    this.matIconRegistry.addSvgIcon('books', this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/images/support/books.svg'));
    this.matIconRegistry.addSvgIcon('albert', this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/images/support/albert.svg'));
    this.matIconRegistry.addSvgIcon('paint', this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/images/support/paint.svg'));
    this.matIconRegistry.addSvgIcon('penzle', this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/images/support/penzle.svg'));
    this.matIconRegistry.addSvgIcon('rocket', this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/images/support/rocket.svg'));
    this.matIconRegistry.addSvgIcon('stand', this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/images/support/stand.svg'));

  }
}

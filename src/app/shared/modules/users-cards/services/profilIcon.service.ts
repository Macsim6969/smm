import {Injectable} from "@angular/core";
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";

@Injectable()

export class ProfilIconService{

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon('visa', this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/images/cards/visa.svg'));
    this.matIconRegistry.addSvgIcon('copy', this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/images/cards/copy.svg'));
    this.matIconRegistry.addSvgIcon('more', this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/images/cards/more.svg'));
    this.matIconRegistry.addSvgIcon('plus', this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/images/cards/plus.svg'));
    this.matIconRegistry.addSvgIcon('add', this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/images/cards/add.svg'));
  }
}

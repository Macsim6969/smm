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
  }
}

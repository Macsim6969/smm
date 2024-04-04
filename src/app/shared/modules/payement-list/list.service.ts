import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";
import {Injectable} from "@angular/core";


@Injectable()

export class ListIconService{
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon('settings', this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/images/list/settings.svg'));
    this.matIconRegistry.addSvgIcon('trash', this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/images/list/trash.svg'));
    this.matIconRegistry.addSvgIcon('close', this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/images/list/close.svg'));
    this.matIconRegistry.addSvgIcon('confirme', this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/images/list/confirme.svg'));

    this.matIconRegistry.addSvgIcon('arrow', this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/images/list/arrow.svg'));
    this.matIconRegistry.addSvgIcon('search', this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/images/list/search.svg'));
  }
}

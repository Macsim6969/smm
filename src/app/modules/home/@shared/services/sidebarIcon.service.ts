import {Injectable} from "@angular/core";
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";


@Injectable()

export  class SidebarIconService{
  constructor(private matIconRegistry: MatIconRegistry,
              private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon('logo', this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/images/auth/logo.svg'));

    this.matIconRegistry.addSvgIcon('group', this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/images/sidebar/group.svg'));
    this.matIconRegistry.addSvgIcon('manager', this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/images/sidebar/manager.svg'));
    this.matIconRegistry.addSvgIcon('offers', this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/images/sidebar/offer.svg'));
    this.matIconRegistry.addSvgIcon('profil', this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/images/sidebar/profil.svg'));
    this.matIconRegistry.addSvgIcon('users', this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/images/sidebar/users.svg'));
    this.matIconRegistry.addSvgIcon('oscillate', this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/images/sidebar/oscillate.svg'));
    this.matIconRegistry.addSvgIcon('support', this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/images/sidebar/support.svg'));
    this.matIconRegistry.addSvgIcon('document', this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/images/sidebar/document.svg'));
  }
}

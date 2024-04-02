import {Injectable} from "@angular/core";
import {DomSanitizer} from "@angular/platform-browser";
import {MatIconRegistry} from "@angular/material/icon";


@Injectable()

export class AuthIconsService {
  constructor(private matIconRegistry: MatIconRegistry
              , private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon('logo', this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/images/auth/logo.svg'));
    this.matIconRegistry.addSvgIcon('arrow-bottom', this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/images/auth/arrow-bottom.svg'));
    this.matIconRegistry.addSvgIcon('view', this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/images/auth/password_view.svg'));
  }
}

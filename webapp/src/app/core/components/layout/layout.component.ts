import { Component } from '@angular/core';

import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from "@angular/platform-browser";

import * as fromServicesShared from '@shared/services';

@Component({
  selector: 'PREFIX_APP-layout',
  // encapsulation: ViewEncapsulation.None,
  styleUrls: ['./layout.component.scss'],
  templateUrl: './layout.component.html',
  providers: [fromServicesShared.UtilsService]
})
export class LayoutComponent {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
  ) {
    this.matIconRegistry.addSvgIcon(
      'PREFIX_APP-profile',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/images/icons/user.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'PREFIX_APP-help',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/images/icons/icon-help.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'PREFIX_APP-logout',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/images/icons/icon-logout.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'PREFIX_APP-visibility-on',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/images/icons/icon-visibility-on.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'PREFIX_APP-visibility-off',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/images/icons/icon-visibility-off.svg')
    );
  }
}

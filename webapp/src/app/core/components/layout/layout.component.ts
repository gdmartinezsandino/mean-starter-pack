import { Component } from '@angular/core';

import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from "@angular/platform-browser";


import * as fromServicesShared from '@shared/services';

@Component({
  selector: 'PREFIX_WEBAPP-layout',
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
      'PREFIX_WEBAPP-instagram',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/promotor/images/icons/instagram.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'PREFIX_WEBAPP-twitter',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/promotor/images/icons/twitter.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'PREFIX_WEBAPP-coste',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/promotor/images/icons/coste.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'PREFIX_WEBAPP-controla',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/promotor/images/icons/controla.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'PREFIX_WEBAPP-sencilla',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/promotor/images/icons/sencilla.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'PREFIX_WEBAPP-inteligente',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/promotor/images/icons/inteligente.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'PREFIX_WEBAPP-gestiona',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/promotor/images/icons/gestiona.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'PREFIX_WEBAPP-promocionate',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/promotor/images/icons/promocionate.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'PREFIX_WEBAPP-vende-tus-entradas',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/promotor/images/icons/vende-tus-entradas.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'PREFIX_WEBAPP-button-top',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/promotor/images/icons/button-top.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'PREFIX_WEBAPP-see-more',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/promotor/images/icons/see-more.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'PREFIX_WEBAPP-stripe',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/promotor/images/icons/stripe.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'PREFIX_WEBAPP-location',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/promotor/images/icons/location.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'PREFIX_WEBAPP-phone',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/promotor/images/icons/phone.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'PREFIX_WEBAPP-delete',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/promotor/images/icons/delete.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'PREFIX_WEBAPP-duplicate',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/promotor/images/icons/duplicate.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'PREFIX_WEBAPP-edit',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/promotor/images/icons/edit.svg')
    );
  }
}

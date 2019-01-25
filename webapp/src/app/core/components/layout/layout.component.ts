import { Component, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';

import * as fromServicesShared from '@shared/services';

@Component({
  selector: 'application-prefix-layout',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./layout.component.scss'],
  templateUrl: './layout.component.html',
  providers: [fromServicesShared.UtilsService]
})
export class LayoutComponent implements OnInit, AfterViewInit {
  constructor( ) { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

  ngAfterViewInit() { }
}

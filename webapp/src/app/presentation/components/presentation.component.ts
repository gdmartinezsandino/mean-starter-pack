import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';

@Component({
  selector: 'PREFIX_APP-presentation',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss'],
})
export class PresentationComponent implements OnInit {
  public displayHeight: string;
  public isLogin: boolean;

  constructor(
    private _router: Router,
  ) {
    this._router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.isLogin = (event.url === '/login') ? true : false;
      }
    });

  }

  ngOnInit() {
    this.displayHeight = `${window.innerHeight}px`;
  }
}

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router, ActivatedRouteSnapshot, UrlSegment, NavigationStart, NavigationEnd } from "@angular/router";
import { Title } from '@angular/platform-browser';
import 'rxjs/add/operator/pairwise';
import { Navigation } from 'selenium-webdriver';

@Component({
  selector: 'app-breadcrumb',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./breadcrumb.component.scss'],
  templateUrl: './breadcrumb.component.html',
})
export class BreadcrumbComponent implements OnInit {
  public config: any;
  public title: string;
  public breadcrumbs: {
    name: string;
    url: string
  }[] = [];

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _title: Title,
  ) {

  }

  ngOnInit() {
    this._router.events
      // .filter((event: any) => event instanceof NavigationEnd)
      .subscribe(event => {
        this.breadcrumbs = [];
        this.parseRoute(this._router.routerState.snapshot.root);
        this.title = '';
        this.breadcrumbs.forEach(breadcrumb => {
          this.title += ' > ' + breadcrumb.name;
        });
        this._title.setTitle('Angular2+ Project - ' + this.title);
      });
  }

  parseRoute(node: ActivatedRouteSnapshot) {
    if (node.data['breadcrumb']) {
      if (node.url.length) {
        let urlSegments: UrlSegment[] = [];
        node.pathFromRoot.forEach(routerState => {
          urlSegments = urlSegments.concat(routerState.url);
        });
        const url = urlSegments.map(urlSegment => {
          return urlSegment.path;
        }).join('/');
        this.breadcrumbs.push({
          name: node.data['breadcrumb'],
          url: '/' + url
        });
      }
    }

    if (node.firstChild) {
      this.parseRoute(node.firstChild);
    }
  }
}













// import { Component, ViewEncapsulation } from '@angular/core';

// import { CoreState } from "../../../app.state";

// @Component({
//     selector: 'az-breadcrumb',
//     encapsulation: ViewEncapsulation.None,
//     styleUrls: ['./breadcrumb.component.scss'],
//     templateUrl: './breadcrumb.component.html'
// })

// export class BreadcrumbComponent {

//     public activePageTitle:string = '';

//     constructor(private _state:CoreState){
//         this._state.subscribe('menu.activeLink', (activeLink) => {
//             if (activeLink) {
//                 this.activePageTitle = activeLink;
//             }
//         });
//     }

//     public ngOnInit():void {
//         if (!this.activePageTitle) {
//             this.activePageTitle = 'dashboard';
//         }

//     }

// }

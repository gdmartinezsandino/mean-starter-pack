import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './error.component.html'
})
export class ErrorComponent {
    router: Router;

    constructor(router: Router) {
        this.router = router;
    }

    searchResult(): void {
        console.log('se va a search');
        // this.router.navigate(['dashboard/search']);
    }
}

import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'project-name-error',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './error.component.html'
})
export class ErrorComponent {
    router: Router;

    constructor(router: Router) {
        this.router = router;
    }

    searchResult(): void {
        // this.router.navigate(['dashboard/search']);
    }
}

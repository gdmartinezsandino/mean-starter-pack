import { Component } from '@angular/core';

@Component({
  selector: 'PREFIX_WEBAPP-footer',
  styleUrls: ['./footer.component.scss'],
  templateUrl: './footer.component.html'
})
export class FooterComponent {
  public site: string = 'PREFIX_TITLE_APP';
  public year: any = new Date();

  constructor() {

  }
}

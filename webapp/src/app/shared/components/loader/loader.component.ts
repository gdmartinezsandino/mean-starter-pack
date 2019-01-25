import { Component, Input } from '@angular/core';

@Component({
  selector: 'application-prefix-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {
  @Input() show: boolean;
  @Input() overlay: boolean;

  constructor() { }
}

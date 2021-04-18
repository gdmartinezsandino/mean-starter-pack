import { Component, Input } from '@angular/core';

@Component({
  selector: 'project-name-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {
  @Input() show: boolean = false;
  @Input() overlay: boolean = false;

  constructor() { }
}

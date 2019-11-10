import { Pipe, PipeTransform } from '@angular/core';
import * as fromSharedServices from '../../services/index';
@Pipe({
  name: 'translate',
  pure: false
})
export class TranslatePipe implements PipeTransform {
  constructor(private translate: fromSharedServices.TranslationsService) {}
  transform(key: any): any {
    return this.translate.translations[key] || key;
  }
}

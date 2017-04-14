import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mask'
})
export class MaskPipe implements PipeTransform {

  transform(value: string, maxlength: number = 4): any {
    let mask_star = '';
    for (let i = 0; i < maxlength; i++) {
      mask_star += "*";
    }
    if (value.length > maxlength) {
      return value.substr(0, maxlength) + mask_star;
    } else {
      return value;
    }
  }

}

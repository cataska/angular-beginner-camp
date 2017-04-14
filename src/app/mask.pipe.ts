import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mask'
})
export class MaskPipe implements PipeTransform {

  transform(value: string, maxlength: number = 4): any {
    if (value.length > maxlength) {
      return value.substr(0, maxlength) + "***";
    } else {
      return value;
    }
  }

}

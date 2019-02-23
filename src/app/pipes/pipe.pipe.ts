import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeType'
})
export class PipePipe implements PipeTransform {

  transform(value: any): any {
    switch(value) {
      case 0: value = 'TRAVEL'; break;
      case 1: value = 'LODGING'; break;
      case 2: value = 'FOOD'; break;
      case 3: value = 'OTHER'; break;
    }
 
    return value;
  }

}

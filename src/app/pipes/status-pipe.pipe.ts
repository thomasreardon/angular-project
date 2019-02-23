import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusPipe'
})
export class StatusPipePipe implements PipeTransform {

  transform(value: any): any {
    switch(value) {
      case 0: value = 'Pending'; break;
      case 1: value = 'Approved'; break;
      case 2: value = 'Denied'; break;
    }
 
    return value;
  }

}

import { Pipe, PipeTransform } from '@angular/core';
import { Status } from '../models/product';

@Pipe({
  name: 'statusColor',
  standalone: true
})
export class StatusColorPipe implements PipeTransform {

  transform(status: Status): string {
    switch (status) {
      case Status.Available:
        return 'green';
      case Status.OutOfStock:
        return 'red';
      case Status.PreOrder:
        return 'orange';
      default:
        return 'gray';
    }
  }
}
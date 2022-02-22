import { Pipe, PipeTransform } from '@angular/core';
import { departList } from '../model/user.model';

@Pipe({
  name: 'idFilter'
})
export class IdFilterPipe implements PipeTransform {

  transform(value: unknown, departname: departList[]): string | undefined{
    return departname?.find(departMent => departMent.id == value)?.name
  }
}

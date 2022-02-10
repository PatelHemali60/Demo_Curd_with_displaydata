import { Pipe, PipeTransform } from '@angular/core';
import { Department } from '../models/employee.model';

@Pipe({
  name: 'idFilter'
})
export class IdFilterPipe implements PipeTransform {

  transform(value: unknown, departname: Department[]): string | undefined{
    return departname?.find(departMent => departMent.id == value)?.name
  }

}

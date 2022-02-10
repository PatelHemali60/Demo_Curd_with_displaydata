import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../models/employee.model';

@Pipe({
  name: 'searchText'
})
export class SearchPipe implements PipeTransform {

  transform(useradd: User[], search:string): User[] {
    if(search== ''){
      return useradd;
    }
    return useradd.filter((text:User) =>{
      return text.firstName.toLowerCase().match(search.toLocaleLowerCase())
    })
   
  }

}

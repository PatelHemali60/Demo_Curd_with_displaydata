import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../model/user.model';
@Pipe({
  name: 'userSearch'
})
export class UserSearchPipe implements PipeTransform {
  transform(useradd: User[], search:string): User[] {
    if(search== ''){
      return useradd;
    }
    return useradd.filter((text:User) =>{
      return text.firstName.toLowerCase().match(search.toLocaleLowerCase())
    })
   
  }

}

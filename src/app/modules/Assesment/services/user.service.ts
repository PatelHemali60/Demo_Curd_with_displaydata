import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { departList , User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  api:string;

  constructor(private http:HttpClient) { 
    this.api = environment.baseUrl;
  }

  postdata(formvalue:User):Observable<User[]>
  {
    return this.http.post<User[]>(`${this.api}user`,formvalue)
  }

  getdata():Observable<User[]>
  {
    return this.http.get<User[]>(`${this.api}User`)
  }

  getbyid(id:number):Observable<User>
  {
    return this.http.get<User>(`${this.api}User/${id}`)
  }



  updatedata(id:number, para:User):Observable<User>
  {
    return this.http.put<User>(`${this.api}User/${id}`,para)
  }
 

  deldata(id:number):Observable<User[]>
  {
    return this.http.delete<User[]>(`${this.api}User/${id}`)
  }

  getdepart():Observable<departList[]>
  {
   
    return this.http.get<departList[]>(`${this.api}departList`)
  }

  
}

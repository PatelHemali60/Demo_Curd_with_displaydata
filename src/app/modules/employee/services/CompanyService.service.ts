import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Department, User } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  api:string;

  constructor(private http:HttpClient) { 
    this.api = environment.baseUrl;
  }

  postdata(formvalue:User):Observable<User[]>
  {
    return this.http.post<User[]>(`${this.api}employeedb`,formvalue)
  }

  getdata():Observable<User[]>
  {
    return this.http.get<User[]>(`${this.api}employeedb`)
  }

  getbyid(id:number):Observable<User>
  {
    return this.http.get<User>(`${this.api}employeedb/${id}`)
  }



  updatedata(id:number, para:User):Observable<User>
  {
    return this.http.put<User>(`${this.api}employeedb/${id}`,para)
  }
 

  deldata(id:number):Observable<User[]>
  {
    return this.http.delete<User[]>(`${this.api}employeedb/${id}`)
  }

  getdepart():Observable<Department[]>
  {
    return this.http.get<Department[]>(`${this.api}department`)
  }

  
}

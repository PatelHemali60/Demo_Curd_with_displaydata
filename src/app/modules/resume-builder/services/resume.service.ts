import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ResumeBuilder } from '../modal/resume.modal';
import { Observable } from 'rxjs/internal/Observable';



@Injectable({
  providedIn: 'root'
})
export class ResumeService {
  apiLink : string;

  constructor(private http: HttpClient) { 
    this.apiLink =  environment.baseURL; //form enviorment api path store 
  }

  //save data in form
  saveUser(data:ResumeBuilder):Observable<ResumeBuilder>{
    return this.http.post<ResumeBuilder>(`${this.apiLink}ResumeBuilder`, data);
  }


// get data api
  getUserData():Observable<ResumeBuilder>{
    return this.http.get<ResumeBuilder>(`${this.apiLink}ResumeBuilder/1`);
  }


  //delete api
  deleteUser():Observable<number>{
    return this.http.delete<number>(`${this.apiLink}ResumeBuilder/1`);
  }



}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Iemployee } from './IEmployee';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class JsonService {

  private _url:string="./assets/data/employees.json";

  constructor(private http:HttpClient) { }

   getJson(url:string){
     return this.http.get(url);
   }
  
   getEmployees():Observable<Iemployee[]>{
     return this.http.get<Iemployee[]>(this._url);
   
   }


}

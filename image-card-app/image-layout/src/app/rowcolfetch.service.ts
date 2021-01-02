import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RowcolfetchService {

  constructor(private http:HttpClient) {
    
   }
   getData():Observable<any>{
     return this.http.get<any>("http://localhost:3000/card-data");
   }
   postData(data):Observable<any>{
     
     return this.http.post<any>("http://localhost:3000/card-modify",data)
   }
}

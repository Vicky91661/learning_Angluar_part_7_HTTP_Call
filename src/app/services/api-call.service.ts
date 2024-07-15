import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor(private http:HttpClient) {
  
  }

   getTodayjoke(){
    return this.http.get("https://api.chucknorris.io/jokes/random")

   }


}

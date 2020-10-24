import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

url = "https://reqres.in/api/users?page=2"
  constructor(
    private http: HttpClient
  ){}

  getPersonas(){
    let header = new HttpHeaders().set('Type-content','aplication/json');
    return this.http.get(this.url,
      {
        headers:header
      });
  }

  
}

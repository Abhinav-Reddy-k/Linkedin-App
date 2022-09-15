import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  baseUrl: String = "http://localhost:8080/api";
  constructor(private http:HttpClient) {
  }

  registerUser(creds:any){
    return this.http.post(`${this.baseUrl}/profiles`,creds)
  }
}

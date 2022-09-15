import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl: String = "http://localhost:8080/api";
  constructor(private http:HttpClient) {
  }

  authenticateUser(creds:any){
    return this.http.post(`${this.baseUrl}/profiles/auth`,creds)
  }
}

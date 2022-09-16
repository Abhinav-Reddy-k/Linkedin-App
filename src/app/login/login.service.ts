import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HttpService} from "../common/services/http.service";

@Injectable({
  providedIn: 'root'
})
export class LoginService extends HttpService {

  constructor(http: HttpClient) {
    super( "http://localhost:8080/api/profiles/auth",http)
  }

}

import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HttpService} from "../common/services/http.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SkillService extends HttpService {

  constructor(http: HttpClient) {
    super( "http://localhost:8080/api/skill",http)
  }

   getSkills(): Observable<Object> {
    return super.get();
  }


}

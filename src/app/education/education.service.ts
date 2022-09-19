import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HttpService} from "../common/services/http.service";

@Injectable({
  providedIn: 'root'
})
export class EducationService extends HttpService {

  constructor(http: HttpClient) {
    super( "http://localhost:8080/api/education",http)
  }

  getProfileEducation(id:number){
    return this.getAllUrl(`/profile/${id.toString()}`)
  }

  deleteProfileEducation(id:number){
    return this.deleteUrl(`/${id.toString()}`)
  }

}

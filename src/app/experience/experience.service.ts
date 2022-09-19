import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HttpService} from "../common/services/http.service";

@Injectable({
  providedIn: 'root'
})
export class ExperienceService extends HttpService {

  constructor(http: HttpClient) {
    super( "http://localhost:8080/api/experience",http)
  }

  getProfileExperience(id:number){
    return this.getAllUrl(`/profile/${id.toString()}`)
  }

  deleteProfileExperience(id:number){
    return this.deleteUrl(`/${id.toString()}`)
  }

}

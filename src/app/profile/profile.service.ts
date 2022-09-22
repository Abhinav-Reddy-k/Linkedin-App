import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HttpService} from "../common/services/http.service";

@Injectable({
  providedIn: 'root'
})
export class ProfileService extends HttpService {

  constructor(http: HttpClient) {
    super( "http://localhost:8080/api/profiles",http)
  }


  updateProfile(resource: any, id:number) {
    return super.updateUrl(resource, `/${id.toString()}`);
  }

}

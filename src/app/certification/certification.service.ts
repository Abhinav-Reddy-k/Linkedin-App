import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HttpService} from "../common/services/http.service";

@Injectable({
  providedIn: 'root'
})
export class CertificationService extends HttpService {

  constructor(http: HttpClient) {
    super( "http://localhost:8080/api/certifications",http)
  }

  getProfileCertifications(id:number){
    return this.getAllUrl(`/profile/${id.toString()}`)
  }

  deleteProfileCertifications(id:number){
    return this.deleteUrl(`/${id.toString()}`)
  }

  updateCertification(resource: any, id:number) {
    return super.updateUrl(resource, `/${id.toString()}`);
  }

}

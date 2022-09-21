import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HttpService} from "../common/services/http.service";

@Injectable({
  providedIn: 'root'
})
export class AddressService extends HttpService {

  constructor(http: HttpClient) {
    super( "http://localhost:8080/api/address",http)
  }

  getProfileAddress(id:number){
    return this.getAllUrl(`/profile/${id.toString()}`)
  }

  deleteProfileAddress(id:number){
    return this.deleteUrl(`/${id.toString()}`)
  }

  updateAddress(resource: any, id:number) {
    return super.updateUrl(resource, `/${id.toString()}`);
  }

}

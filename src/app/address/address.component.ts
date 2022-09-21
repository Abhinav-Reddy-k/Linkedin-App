import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {AddressService} from "./address.service";
import {AppError} from "../common/errors/app-error";
import {NotFoundError} from "../common/errors/not-found-error";
import {addressDeleted, addressDetailsLoaded} from "./address.actions";
import {educationDeleted} from "../education/education.actions";

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  private profileObserver$: any;
  private profile: any;
  private addressObserver$: any;
  address=[{
    hNo: "",
    colony: "",
    state: "",
    country: "",
    locality: "",
    city: "",
    id: "",
    profileId: ""
  }];

  constructor(private store:Store,private addressService:AddressService) {
    // @ts-ignore
    this.profileObserver$ = store.select((state) => state.login.data)
    this.profileObserver$.subscribe((data:any) =>this.profile = data)

    // @ts-ignore
    this.addressObserver$ = store.select((state) => state.address.data)
    this.addressObserver$.subscribe((data:any) =>this.address = data)
  }

  ngOnInit(): void {
    this.addressService.getProfileAddress(this.profile.id).subscribe({
        next: (edu) => {
          this.store.dispatch(addressDetailsLoaded({data: edu}))
        },
        error: (err: AppError) => {
          if (err instanceof NotFoundError) {
            console.log("Bad req")
          }
        }
      }
    )
  }

  onAddressDelete(id: string) {
    this.addressService.deleteProfileAddress(parseInt(id)).subscribe({
      next:()=>{
        this.store.dispatch(addressDeleted({id:parseInt(id)}))
      }
    })

  }
}

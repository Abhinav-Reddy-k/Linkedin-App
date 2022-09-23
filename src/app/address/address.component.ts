import {Component, Input, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {AddressService} from "./address.service";
import {AppError} from "../common/errors/app-error";
import {NotFoundError} from "../common/errors/not-found-error";
import {addressDeleted, addressDetailsLoaded} from "./address.actions";

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

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

  @Input() profileId:any;

  constructor(private store:Store,private addressService:AddressService) {

    // @ts-ignore
    this.addressObserver$ = store.select((state) => state.address.data)
    this.addressObserver$.subscribe((data:any) =>this.address = data)
  }

  ngOnInit(): void {
    this.addressService.getProfileAddress(this.profileId).subscribe({
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

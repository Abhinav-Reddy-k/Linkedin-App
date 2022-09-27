import {Component, Input, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {AddressService} from "./address.service";
import {AppError} from "../common/errors/app-error";
import {NotFoundError} from "../common/errors/not-found-error";
import {addressDeleted, addressDetailsLoaded} from "./address.actions";
import {AddressModel} from "../shared/address.model";

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  private addressObserver$: any;
  address: AddressModel[] = [{
    hNo: "",
    colony: "",
    state: "",
    country: "",
    locality: "",
    city: "",
    id: 0,
    profileId: 0
  }];

  @Input() profileId: any;

  constructor(private store: Store, private addressService: AddressService) {

    // @ts-ignore
    this.addressObserver$ = store.select((state) => state.address.data)
    this.addressObserver$.subscribe((data: AddressModel[]) => this.address = data)
  }

  ngOnInit(): void {
    this.addressService.getProfileAddress(this.profileId).subscribe({
        next: (add) => {
          this.store.dispatch(addressDetailsLoaded({data: add as AddressModel[]}))
        },
        error: (err: AppError) => {
          if (err instanceof NotFoundError) {
            console.log("Bad req")
          }
        }
      }
    )
  }

  onAddressDelete(id: number) {
    this.addressService.deleteProfileAddress(id).subscribe({
      next: () => {
        this.store.dispatch(addressDeleted({id: id}))
      }
    })

  }
}

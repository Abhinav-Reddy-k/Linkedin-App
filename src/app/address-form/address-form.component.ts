import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {ActivatedRoute, Router} from "@angular/router";
import {AddressService} from "../address/address.service";
import {AddressModel} from "../shared/address.model";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.css']
})
export class AddressFormComponent implements OnInit {
  formData: AddressModel = {
    id: 0, profileId: 0,
    hNo: "",
    colony: "",
    state: "",
    country: "",
    locality: "",
    city: ""
  };
  private id: any;
  private profileId: string | null | undefined;
  private addressObserver$: any;
  private address: any;

  constructor(private store: Store, private route: ActivatedRoute, private addressService: AddressService, private router: Router) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(p => this.id = p.get('id'));
    this.profileId = window.localStorage.getItem('id');
    if (this.id != "new") {
      // @ts-ignore
      this.addressObserver$ = this.store.select((state) => state.address.data)
      this.addressObserver$.subscribe((data: any) => this.address = data)
      this.formData = this.address.filter((e: { id: string | null | undefined; }) => e.id == this.id)[0]
    } else {
      this.id = 0
    }
  }

  onSubmit(data: NgForm): void {
    if (!data.valid) {
      return
    }
    this.addressService.updateAddress({...data.value, profileId: this.profileId}, parseInt(this.id)).subscribe({
      next: (edu) => {
        this.router.navigate(['/profile'])
      }
    })
  }
}

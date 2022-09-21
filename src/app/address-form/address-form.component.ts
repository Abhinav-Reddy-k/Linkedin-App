import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {ActivatedRoute, Router} from "@angular/router";
import {EducationService} from "../education/education.service";
import {AddressService} from "../address/address.service";

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.css']
})
export class AddressFormComponent implements OnInit {
  formData={
    hNo: "",
    colony: "",
    state: "",
    country: "",
    locality: "",
    city: "",
    id: "",
    profileId: ""};
  private id: any;
  private profileObserver$: any;
  private profile: any;
  private addressObserver$: any;
  private address: any;

  constructor(private store:Store,private route:ActivatedRoute,private addressService:AddressService,private router:Router) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(p => this.id = p.get('id'));
    // @ts-ignore
    this.profileObserver$ = this.store.select((state) => state.login.data)
    this.profileObserver$.subscribe((data:any) =>this.profile = data)
    if(this.id!="new") {
      // @ts-ignore
      this.addressObserver$ = this.store.select((state) => state.address.data)
      this.addressObserver$.subscribe((data: any) => this.address = data)
      this.formData = this.address.filter((e: { id: string | null | undefined; }) => e.id == this.id)[0]
    }
    else{
      this.id=0
    }
  }

  onSubmit(data: any): void {
    this.addressService.updateAddress({...data,profileId:this.profile.id},parseInt(this.id)).subscribe({
      next:(edu)=>{
        this.router.navigate(['/profile'])
      }
    })
  }
}

import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {ActivatedRoute, Router} from "@angular/router";
import {EducationService} from "../education/education.service";
import {CertificationService} from "../certification/certification.service";

@Component({
  selector: 'app-certification-form',
  templateUrl: './certification-form.component.html',
  styleUrls: ['./certification-form.component.css']
})
export class CertificationFormComponent implements OnInit {

  formData= {
    id: "",
    name: "",
    issuingOrganisation: "",
    credentialUrl: "",
    credentialId: "",
    issueDate: "",
    expirationDate: "",
    profileId: ""
  }

  private certification: any;
  private certificationObserver$: any;
  private id: any;
  private profileObserver$: any;
  private profile: any;

  constructor(private store:Store,private route:ActivatedRoute,private router:Router,private certificationService:CertificationService) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(p => this.id = p.get('id'));
    console.log(this.id)
    // @ts-ignore
    this.profileObserver$ = this.store.select((state) => state.login.data)
    this.profileObserver$.subscribe((data:any) =>this.profile = data)
    if(this.id!="new") {
      // @ts-ignore
      this.certificationObserver$ = this.store.select((state) => state.certification.data)
      this.certificationObserver$.subscribe((data: any) => this.certification = data)
      this.formData = this.certification.filter((e: { id: string | null | undefined; }) => e.id == this.id)[0]
    }
    else {
      this.id=0

    }
  }

  onSubmit(data: any): void {
    console.log(data)
    this.certificationService.updateCertification({...data,profileId:this.profile.id},parseInt(this.id)).subscribe({
      next:(edu)=>{
        this.router.navigate(['/profile'])
      }
    })
  }
}



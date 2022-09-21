import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {AppError} from "../common/errors/app-error";
import {NotFoundError} from "../common/errors/not-found-error";
import {CertificationService} from "./certification.service";
import {certificationDeleted, certificationDetailsLoaded} from "./certification.actions";

@Component({
  selector: 'app-certification',
  templateUrl: './certification.component.html',
  styleUrls: ['./certification.component.css']
})
export class CertificationComponent implements OnInit {
  certificationObserver$:any;
  certification=[{
    id: "",
    name: "",
    issuingOrganisation: "",
    credentialUrl: "",
    credentialId: "",
    issueDate: "",
    expirationDate: "",
    profileId: ""
  }]
  profileObserver$:any;
  profile:any;

  constructor(private store:Store,private certificationService:CertificationService) {
    // @ts-ignore
    this.profileObserver$ = store.select((state) => state.login.data)
    this.profileObserver$.subscribe((data:any) =>this.profile = data)

    // @ts-ignore
    this.certificationObserver$ = store.select((state) => state.certification.data)
    this.certificationObserver$.subscribe((data:any) =>this.certification = data)
  }

  ngOnInit(): void {
    this.certificationService.getProfileCertifications(this.profile.id).subscribe({
        next: (edu) => {
          this.store.dispatch(certificationDetailsLoaded({data: edu}))
        },
        error: (err: AppError) => {
          if (err instanceof NotFoundError) {
            console.log("BAd req")
          }
        }
      }
    )
  }

  onCertificateDelete(id: string){
    this.certificationService.deleteProfileCertifications(parseInt(id)).subscribe({
      next:()=>{
        this.store.dispatch(certificationDeleted({id:parseInt(id)}))
      }
    })
  }
}

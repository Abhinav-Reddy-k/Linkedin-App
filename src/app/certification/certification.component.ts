import {Component, Input, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {AppError} from "../common/errors/app-error";
import {NotFoundError} from "../common/errors/not-found-error";
import {CertificationService} from "./certification.service";
import {certificationDeleted, certificationDetailsLoaded} from "./certification.actions";
import {CertificatationModel} from "../shared/certificatation.model";

@Component({
  selector: 'app-certification',
  templateUrl: './certification.component.html',
  styleUrls: ['./certification.component.css']
})
export class CertificationComponent implements OnInit {
  certificationObserver$: any;
  certification: CertificatationModel[] = [{
    id: 0,
    name: "",
    issuingOrganisation: "",
    credentialUrl: "",
    credentialId: "",
    issueDate: "",
    expirationDate: "",
    profileId: 0
  }]

  @Input() profileId: any;


  constructor(private store: Store, private certificationService: CertificationService) {


    // @ts-ignore
    this.certificationObserver$ = store.select((state) => state.certification.data)
    this.certificationObserver$.subscribe((data: CertificatationModel[]) => this.certification = data)
  }

  ngOnInit(): void {
    this.certificationService.getProfileCertifications(this.profileId).subscribe({
        next: (certifications) => {
          this.store.dispatch(certificationDetailsLoaded({data: certifications as CertificatationModel[]}))
        },
        error: (err: AppError) => {
          if (err instanceof NotFoundError) {
            console.log("Bad request")
          }
        }
      }
    )
  }

  onCertificateDelete(id: number) {
    this.certificationService.deleteProfileCertifications(id).subscribe({
      next: () => {
        this.store.dispatch(certificationDeleted({id: id}))
      }
    })
  }
}

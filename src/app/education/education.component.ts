import {Component, Input, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {EducationService} from "./education.service";
import {AppError} from "../common/errors/app-error";
import {NotFoundError} from "../common/errors/not-found-error";
import {educationDeleted, educationDetailsLoaded} from "./education.actions";
import {EducationModel} from "../shared/education.model";

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  educationObserver$: any;
  education: EducationModel[] = [{
    id: 0,
    school: "",
    degree: "",
    grade: "",
    fieldOfStudy: "",
    startDate: "",
    endDate: "",
    description: "",
    profileId: 0
  }]

  @Input() profileId: any;

  constructor(private store: Store, private educationService: EducationService) {


    // @ts-ignore
    this.educationObserver$ = store.select((state) => state.education.data)
    this.educationObserver$.subscribe((data: EducationModel[]) => this.education = data)
  }

  ngOnInit(): void {
    this.educationService.getProfileEducation(this.profileId).subscribe({
        next: (edu) => {
          this.store.dispatch(educationDetailsLoaded({data: edu as EducationModel[]}))
        },
        error: (err: AppError) => {
          if (err instanceof NotFoundError) {
            console.log("Bad req")
          }
        }
      }
    )
  }

  onEducationDelete(id: number) {
    this.educationService.deleteProfileEducation(id).subscribe({
      next: () => {
        this.store.dispatch(educationDeleted({id}))
      }
    })
  }
}

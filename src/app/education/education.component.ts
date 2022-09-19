import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {EducationService} from "./education.service";
import {login} from "../login/login.actions";
import {AppError} from "../common/errors/app-error";
import {NotFoundError} from "../common/errors/not-found-error";
import {educationDeleted, educationDetailsLoaded} from "./education.actions";

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  educationObserver$:any;
  education=[{
    id: '',
    school: "",
    degree: "",
    grade: "",
    fieldOfStudy: "",
    startDate: "",
    endDate: "",
    description: "",
    profileId: ""
  }]
  profileObserver$:any;
  profile:any;

  constructor(private store:Store,private educationService:EducationService) {
    // @ts-ignore
    this.profileObserver$ = store.select((state) => state.login.data)
    this.profileObserver$.subscribe((data:any) =>this.profile = data)

    // @ts-ignore
    this.educationObserver$ = store.select((state) => state.education.data)
    this.educationObserver$.subscribe((data:any) =>this.education = data)
  }

  ngOnInit(): void {
    this.educationService.getProfileEducation(this.profile.id).subscribe({
        next: (edu) => {
          this.store.dispatch(educationDetailsLoaded({data: edu}))
          console.log(this.education)
        },
        error: (err: AppError) => {
          if (err instanceof NotFoundError) {
            console.log("BAd req")
          }
        }
      }
    )
  }

  onEducationDelete(id: string){
    this.educationService.deleteProfileEducation(parseInt(id)).subscribe({
      next:()=>{
        this.store.dispatch(educationDeleted({id:parseInt(id)}))
      }
    })
  }
}

import {Component, Input, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {AppError} from "../common/errors/app-error";
import {NotFoundError} from "../common/errors/not-found-error";
import {ExperienceService} from "./experience.service";
import {experienceDeleted, experienceDetailsLoaded} from "./experience.actions";

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  experienceObserver$:any;
  experience=[{
    id: "",
    companyName: "",
    jobRole: "",
    profileId: ""
  }]
  @Input() profileId:any;


  constructor(private store:Store,private experienceService:ExperienceService) {


    // @ts-ignore
    this.experienceObserver$ = store.select((state) => state.experience.data)
    this.experienceObserver$.subscribe((data:any) =>this.experience = data)
  }

  ngOnInit(): void {
    this.experienceService.getProfileExperience(this.profileId).subscribe({
        next: (edu) => {
          this.store.dispatch(experienceDetailsLoaded({data: edu}))
        },
        error: (err: AppError) => {
          if (err instanceof NotFoundError) {
            console.log("BAd req")
          }
        }
      }
    )
  }

  onExperienceDelete(id: string){
    this.experienceService.deleteProfileExperience(parseInt(id)).subscribe({
      next:()=>{
        this.store.dispatch(experienceDeleted({id:parseInt(id)}))
      }
    })
  }

}

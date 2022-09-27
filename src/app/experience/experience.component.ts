import {Component, Input, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {AppError} from "../common/errors/app-error";
import {NotFoundError} from "../common/errors/not-found-error";
import {ExperienceService} from "./experience.service";
import {experienceDeleted, experienceDetailsLoaded} from "./experience.actions";
import {ExperienceModel} from "../shared/experience.model";

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  experienceObserver$: any;
  experience: ExperienceModel[] = [{
    id: 0,
    companyName: "",
    jobRole: "",
    profileId: 0
  }]
  @Input() profileId: any;


  constructor(private store: Store, private experienceService: ExperienceService) {


    // @ts-ignore
    this.experienceObserver$ = store.select((state) => state.experience.data)
    this.experienceObserver$.subscribe((data: ExperienceModel[]) => this.experience = data)
  }

  ngOnInit(): void {
    this.experienceService.getProfileExperience(this.profileId).subscribe({
        next: (experience) => {
          this.store.dispatch(experienceDetailsLoaded({data: experience as ExperienceModel[]}))
        },
        error: (err: AppError) => {
          if (err instanceof NotFoundError) {
            console.log("Bad request")
          }
        }
      }
    )
  }

  onExperienceDelete(id: number) {
    this.experienceService.deleteProfileExperience(id).subscribe({
      next: () => {
        this.store.dispatch(experienceDeleted({id: id}))
      }
    })
  }

}

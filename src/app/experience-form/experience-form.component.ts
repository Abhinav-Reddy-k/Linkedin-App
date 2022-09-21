import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {ActivatedRoute, Router} from "@angular/router";
import {ExperienceService} from "../experience/experience.service";

@Component({
  selector: 'app-experience-form',
  templateUrl: './experience-form.component.html',
  styleUrls: ['./experience-form.component.css']
})
export class ExperienceFormComponent implements OnInit {
  formData={
    id: "",
    companyName: "",
    jobRole: "",
  };
  private id: any;
  private profileObserver$: any;
  private profile: any;
  private experienceObserver$: any;
  private experience: any;

  constructor(private store:Store,private route:ActivatedRoute,private experienceService:ExperienceService,private router:Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(p => this.id = p.get('id'));
    // @ts-ignore
    this.profileObserver$ = this.store.select((state) => state.login.data)
    this.profileObserver$.subscribe((data:any) =>this.profile = data)
    if(this.id!="new") {
      // @ts-ignore
      this.experienceObserver$ = this.store.select((state) => state.experience.data)
      this.experienceObserver$.subscribe((data: any) => this.experience = data)
      this.formData = this.experience.filter((e: { id: string | null | undefined; }) => e.id == this.id)[0]
    }
    else {
      this.id=0
    }
  }

  onSubmit(data: any) {
    this.experienceService.updateExperience({...data,profileId:this.profile.id},parseInt(this.id)).subscribe({
      next:(edu)=>{
        this.router.navigate(['/profile'])
      }
    })

  }
}

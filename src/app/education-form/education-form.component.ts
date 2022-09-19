import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {ActivatedRoute, Router} from "@angular/router";
import {EducationService} from "../education/education.service";

@Component({
  selector: 'app-education-form',
  templateUrl: './education-form.component.html',
  styleUrls: ['./education-form.component.css']
})
export class EducationFormComponent implements OnInit {

  formData= {
    school: "",
    degree: "",
    grade: "",
    fieldOfStudy: "",
    startDate: "",
    endDate: "",
    description: "",
    profileId: ""
  }
  private education: any;
  private educationObserver$: any;
  private id: any;

  constructor(private store:Store,private route:ActivatedRoute,private educationService:EducationService,private router:Router) {
    // @ts-ignore
    this.educationObserver$ = store.select((state) => state.education.data)
    this.educationObserver$.subscribe((data:any) =>this.education = data)
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(p => this.id = p.get('id'));
    this.formData = this.education.filter((e: { id: string | null | undefined; }) => e.id == this.id)[0]
  }

  onSubmit(data: any): void {
    this.educationService.updateEducation(data,parseInt(this.id)).subscribe({
      next:(edu)=>{
        this.router.navigate(['/profile'])
      }
    })
  }

}

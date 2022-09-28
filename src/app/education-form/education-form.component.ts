import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {ActivatedRoute, Router} from "@angular/router";
import {EducationService} from "../education/education.service";
import {NgForm} from "@angular/forms";
import {EducationModel} from "../shared/education.model";

@Component({
  selector: 'app-education-form',
  templateUrl: './education-form.component.html',
  styleUrls: ['./education-form.component.css']
})
export class EducationFormComponent implements OnInit {

  formData: EducationModel = {
    id: 0,
    school: "",
    degree: "",
    grade: "",
    fieldOfStudy: "",
    startDate: "",
    endDate: "",
    description: "",
    profileId: 0
  }
  private education: any;
  private educationObserver$: any;
  private id: any;
  private profileId: any;

  constructor(private store: Store, private route: ActivatedRoute, private educationService: EducationService, private router: Router) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(p => this.id = p.get('id'));
    this.profileId = window.localStorage.getItem('id');

    if (this.id != "new") {
      // @ts-ignore
      this.educationObserver$ = this.store.select((state) => state.education.data)
      this.educationObserver$.subscribe((data: any) => this.education = data)
      this.formData = this.education.filter((e: { id: string | null | undefined; }) => e.id == this.id)[0]
    } else {
      this.id = 0
    }
  }

  onSubmit(data: NgForm): void {
    if (!data.valid) {
      return
    }
    this.educationService.updateEducation({...data.value, profileId: this.profileId}, parseInt(this.id)).subscribe({
      next: (edu) => {
        this.router.navigate(['/profile'])
      }
    })
  }
}

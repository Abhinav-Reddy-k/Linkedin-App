import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {Router} from "@angular/router";
import {SkillService} from "./skill.service";
import {Observable} from "rxjs";
import {certificationDetailsLoaded} from "../certification/certification.actions";
import {AppError} from "../common/errors/app-error";
import {NotFoundError} from "../common/errors/not-found-error";
import {skillDetailsLoaded} from "./skill.actions";

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  private skillObserver$: Observable<any>;
  private skill: any;

  constructor(private store: Store, private router: Router, private skillService: SkillService,) {
    // @ts-ignore
    this.skillObserver$ = store.select((state) => state.skill.data)
    this.skillObserver$.subscribe((data:any) =>this.skill = data)
  }

  ngOnInit(): void {
    this.skillService.getSkills().subscribe({
        next: (edu) => {
          this.store.dispatch(skillDetailsLoaded({data: edu}))
        },
        error: (err: AppError) => {
          if (err instanceof NotFoundError) {
            console.log("BAd req")
          }
        }
      }
    )
  }

}

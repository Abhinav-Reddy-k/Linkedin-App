import {Component, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {Router} from "@angular/router";
import {ProfileService} from "./profile.service";
import {login} from "../login/login.actions";
import {AppError} from "../common/errors/app-error";
import {NotFoundError} from "../common/errors/not-found-error";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ProfileModel} from "../shared/profile.model";
import {getProfile} from "./profile.selector";
import {Observable} from "rxjs";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileObserver$: Observable<ProfileModel>;
  profile: ProfileModel = {
    email: "", firstName: "", headline: "", id: 0, imageUrl: "", lastName: "", password: "", phone: "", pronounId: 0
  };

  constructor(private store: Store, private router: Router, private profileService: ProfileService, private _snackBar: MatSnackBar) {
    // @ts-ignore
    this.profileObserver$ = store.select((state) => state.login.data)
    this.profileObserver$.subscribe((data) => this.profile = data)

  }

  ngOnInit(): void {
    if (!this.profile) {
      if (localStorage.getItem('id')) {
        // @ts-ignore
        this.profileService.getProfile(parseInt(localStorage.getItem("id"))).subscribe({
          next: (profile) => {
            this.store.dispatch(login({data: profile as ProfileModel}))
            this.router.navigate(["/profile"])
            // @ts-ignore
            localStorage.setItem("id", `${profile.id}`)
          },
          error: (err: AppError) => {
            if (err instanceof NotFoundError) {
              this._snackBar.open("User Not Found with the email pass combination", "close");
            }
          }
        });
      } else {
        this.router.navigate([""])
      }
    }
  }


}

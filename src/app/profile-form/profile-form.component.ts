import {Component, OnInit} from '@angular/core';
import {ProfileService} from "../profile/profile.service";
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css']
})
export class ProfileFormComponent implements OnInit {

  formData = {
    firstName: "",
    lastName: "",
    headline: "",
    imageUrl: "",
    phone: "",
    email: "",
    password: ""
  }
  private profileObserver$: any;
  private profile: any;


  constructor(private store: Store, private profileService: ProfileService, private router: Router,) {
  }

  ngOnInit(): void {

    // @ts-ignore
    this.profileObserver$ = this.store.select((state) => state.login.data)
    this.profileObserver$.subscribe((data: any) => {
      this.profile = data;
      this.formData = data;
    })
  }

  onSubmit(data: any) {
    this.profileService.updateProfile({
      ...data,
      email: this.formData.email,
      password: this.formData.password
    }, parseInt(this.profile.id)).subscribe({
      next: (edu) => {
        this.router.navigate(["/profile"]).then(r => window.location.reload())

      }
    })
  }
}

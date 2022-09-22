import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {AuthComponent} from "./auth/auth.component";
import {RegisterComponent} from "./register/register.component";
import {ProfileComponent} from "./profile/profile.component";
import {EducationFormComponent} from "./education-form/education-form.component";
import {ExperienceFormComponent} from "./experience-form/experience-form.component";
import {CertificationFormComponent} from "./certification-form/certification-form.component";
import {AddressFormComponent} from "./address-form/address-form.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {ProfileFormComponent} from "./profile-form/profile-form.component";

const routes: Routes = [
  {path: "", redirectTo:"auth/login",pathMatch:"full"},
  {path:"auth",redirectTo:"auth/login",pathMatch:"full"},
  {
    path: "auth",
    component: AuthComponent,
    children: [
      {
        path: 'login', // child route path
        component: LoginComponent, // child route component that the router renders
      },
      {
        path: 'register',
        component: RegisterComponent, // another child route component that the router renders
      },
    ],
  },
  {path:"profile/edit",component:ProfileFormComponent},
  {path:"profile/address/:id",component:AddressFormComponent},
  {path:"profile/education/:id",component:EducationFormComponent},
  {path:"profile/certification/:id",component:CertificationFormComponent},
  {path:"profile/experience/:id",component:ExperienceFormComponent},
  {path:"profile",component:ProfileComponent},
  {path:"**",component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

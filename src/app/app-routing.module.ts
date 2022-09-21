import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {AppComponent} from "./app.component";
import {AuthComponent} from "./auth/auth.component";
import {RegisterComponent} from "./register/register.component";
import {ProfileComponent} from "./profile/profile.component";
import {EducationFormComponent} from "./education-form/education-form.component";
import {ExperienceFormComponent} from "./experience-form/experience-form.component";
import {CertificationFormComponent} from "./certification-form/certification-form.component";

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
  {path:"profile/education/:id",component:EducationFormComponent},
  {path:"profile/certification/:id",component:CertificationFormComponent},
  {path:"profile/experience/:id",component:ExperienceFormComponent},
  {path:"profile",component:ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

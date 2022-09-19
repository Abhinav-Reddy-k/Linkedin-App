import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {AppComponent} from "./app.component";
import {AuthComponent} from "./auth/auth.component";
import {RegisterComponent} from "./register/register.component";
import {ProfileComponent} from "./profile/profile.component";

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
  {path:"profile",component:ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

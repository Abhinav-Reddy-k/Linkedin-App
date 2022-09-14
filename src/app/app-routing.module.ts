import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {AppComponent} from "./app.component";
import {AuthComponent} from "./auth/auth.component";

const routes: Routes = [
  {path: "", component: AppComponent},
  {
    path: "auth",
    component: AuthComponent,
    children:[

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

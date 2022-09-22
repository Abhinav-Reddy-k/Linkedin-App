import {ErrorHandler, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {RegisterComponent} from './register/register.component';
import {ProfileComponent} from './profile/profile.component';
import {AuthComponent} from './auth/auth.component';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LoginService} from "./login/login.service";
import {HttpClientModule} from "@angular/common/http";
import {AppErrorHandler} from "./common/app-error-handler";
import {StoreModule} from '@ngrx/store';
import {loginReducer} from "./login/login.reducer";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {MatCardModule} from "@angular/material/card";
import { EducationComponent } from './education/education.component';
import {educationReducer} from "./education/education.reducer";
import { CertificationComponent } from './certification/certification.component';
import {certificationReducer} from "./certification/certification.reducer";
import { SkillComponent } from './skill/skill.component';
import {skillReducer} from "./skill/skill.reducer";
import { ExperienceComponent } from './experience/experience.component';
import {experienceReducer} from "./experience/experience.reducer";
import {MatDividerModule} from "@angular/material/divider";
import { EducationFormComponent } from './education-form/education-form.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import { ExperienceFormComponent } from './experience-form/experience-form.component';
import { CertificationFormComponent } from './certification-form/certification-form.component';
import { AddressComponent } from './address/address.component';
import {addressReducer} from "./address/address.reducer";
import { AddressFormComponent } from './address-form/address-form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {MatSnackBarModule} from "@angular/material/snack-bar";
import { ProfileFormComponent } from './profile-form/profile-form.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    AuthComponent,
    EducationComponent,
    CertificationComponent,
    SkillComponent,
    ExperienceComponent,
    EducationFormComponent,
    ExperienceFormComponent,
    CertificationFormComponent,
    AddressComponent,
    AddressFormComponent,
    PageNotFoundComponent,
    ProfileFormComponent
  ],
  imports: [

    MatSnackBarModule,
    MatNativeDateModule,
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({
      login: loginReducer,
      education: educationReducer,
      certification: certificationReducer,
      skill: skillReducer,
      experience: experienceReducer,
      address:addressReducer
    }),
    StoreDevtoolsModule.instrument(),
    MatCardModule,
    MatDividerModule,
    MatDatepickerModule,
  ],
  providers: [MatDatepickerModule,LoginService, {provide: ErrorHandler, useClass: AppErrorHandler}],
  bootstrap: [AppComponent]
})
export class AppModule {
}

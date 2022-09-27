import {createAction, props} from '@ngrx/store';
import {EducationModel} from "../shared/education.model";

export const educationDetailsLoaded = createAction('[Education Component] Education',props<{data:EducationModel[]}>());
export const educationDeleted = createAction('educationDeleted',props<{id:number}>());
export const educationUpdated = createAction('educationUpdated',props<{data:any}>());

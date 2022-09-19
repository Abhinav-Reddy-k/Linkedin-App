import {createAction, props} from '@ngrx/store';

export const educationDetailsLoaded = createAction('[Education Component] Education',props<{data:any}>());
export const educationDeleted = createAction('educationDeleted',props<{id:number}>());
export const educationUpdated = createAction('educationUpdated',props<{data:any}>());

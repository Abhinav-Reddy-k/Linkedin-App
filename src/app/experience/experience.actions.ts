import {createAction, props} from '@ngrx/store';

export const experienceDetailsLoaded = createAction('[Experience Component] Education',props<{data:any}>());
export const experienceDeleted = createAction('experienceDeleted',props<{id:number}>());

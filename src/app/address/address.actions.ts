import {createAction, props} from '@ngrx/store';

export const addressDetailsLoaded = createAction('[address Component] Address',props<{data:any}>());
export const addressDeleted = createAction('addressDeleted',props<{id:number}>());
export const addressUpdated = createAction('addressUpdated',props<{data:any}>());

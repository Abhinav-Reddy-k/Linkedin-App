import {createAction, props} from '@ngrx/store';

export const certificationDetailsLoaded = createAction('[Certification Component] Certification',props<{data:any}>());
export const certificationDeleted = createAction('certificationDeleted',props<{id:number}>());

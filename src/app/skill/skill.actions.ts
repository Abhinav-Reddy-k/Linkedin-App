import {createAction, props} from '@ngrx/store';

export const skillDetailsLoaded = createAction('[Skill Component] Skill',props<{data:any}>());
export const skillDeleted = createAction('skillDeleted',props<{id:number}>());

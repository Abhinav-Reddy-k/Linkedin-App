import {createAction, props} from '@ngrx/store';
import {ExperienceModel} from "../shared/experience.model";

export const experienceDetailsLoaded = createAction('[Experience Component] Education',props<{data:ExperienceModel[]}>());
export const experienceDeleted = createAction('experienceDeleted',props<{id:number}>());

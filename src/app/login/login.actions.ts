import {createAction, props} from '@ngrx/store';
import {ProfileModel} from "../shared/profile.model";

export const login = createAction('[Login Component] Login',props<{data:ProfileModel}>());

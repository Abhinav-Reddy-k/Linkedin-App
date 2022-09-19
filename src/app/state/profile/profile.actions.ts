import {createAction, props} from '@ngrx/store';
import {ProfileState} from "./profile.state";

export const profileDetailsLoaded = createAction('profileDetailsLoaded',props<ProfileState>());

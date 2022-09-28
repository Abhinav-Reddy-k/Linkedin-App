import { createSelector} from '@ngrx/store';
import {AppState} from "../shared/app.state";

export const getProfileState = (state:AppState) => state.login;

export const getProfile = createSelector(
  getProfileState,
  (state) => state.data
);

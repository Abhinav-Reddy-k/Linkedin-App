import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AppState} from "../shared/app.state";

export const getProfileState = createFeatureSelector<AppState>('login');

export const getProfile = createSelector(
  getProfileState,
  (state: AppState) => state.login.data
);

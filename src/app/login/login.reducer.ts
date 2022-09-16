import { createReducer, on } from '@ngrx/store';
import { login } from './login.actions';

export const initialState = {};

export const loginReducer = createReducer(
  initialState,
  on(login, (state,payload) => state=payload)
);

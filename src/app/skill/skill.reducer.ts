import { createReducer, on } from '@ngrx/store';
import {skillDeleted,skillDetailsLoaded } from './skill.actions';

export const initialState = {data:[]};

// @ts-ignore
export const skillReducer = createReducer(
  initialState,
  on(skillDetailsLoaded, (state,payload) => state=payload),
  on(skillDeleted,(state,payload) => {
    // @ts-ignore
    let data = [...state.data].filter(e => e.id != payload.id)
    state = {...state,data}
    return state
  })
);

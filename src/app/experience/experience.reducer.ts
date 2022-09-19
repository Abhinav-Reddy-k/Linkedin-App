import { createReducer, on } from '@ngrx/store';
import { experienceDeleted,experienceDetailsLoaded } from './experience.actions';

export const initialState = {data:[]};

// @ts-ignore
export const experienceReducer = createReducer(
  initialState,
  on(experienceDetailsLoaded, (state,payload) => state=payload),
  on(experienceDeleted,(state,payload) => {
    // @ts-ignore
    let data = [...state.data].filter(e => e.id != payload.id)
    state = {...state,data}
    return state
  })
);

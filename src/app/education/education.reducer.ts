import { createReducer, on } from '@ngrx/store';
import { educationDetailsLoaded,educationDeleted } from './education.actions';

export const initialState = {data:[]};

// @ts-ignore
export const educationReducer = createReducer(
  initialState,
  on(educationDetailsLoaded, (state,payload) => state=payload),
  on(educationDeleted,(state,payload) => {
    // @ts-ignore
    let data = [...state.data].filter(e => e.id != payload.id)
    state = {...state,data}
    return state
  })
);

import { createReducer, on } from '@ngrx/store';
import { certificationDeleted,certificationDetailsLoaded } from './certification.actions';

export const initialState = {data:[]};

// @ts-ignore
export const certificationReducer = createReducer(
  initialState,
  on(certificationDetailsLoaded, (state,payload) => state=payload),
  on(certificationDeleted,(state,payload) => {
    // @ts-ignore
    let data = [...state.data].filter(e => e.id != payload.id)
    state = {...state,data}
    return state
  })
);

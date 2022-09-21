import { createReducer, on } from '@ngrx/store';
import { addressDetailsLoaded,addressDeleted } from './address.actions';

export const initialState = {data:[]};

// @ts-ignore
export const addressReducer = createReducer(
  initialState,
  on(addressDetailsLoaded, (state,payload) => state=payload),
  on(addressDeleted,(state,payload) => {
    // @ts-ignore
    let data = [...state.data].filter(e => e.id != payload.id)
    state = {...state,data}
    return state
  })
);

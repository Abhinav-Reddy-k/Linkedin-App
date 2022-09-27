import {createReducer, on} from '@ngrx/store';
import {addressDetailsLoaded, addressDeleted} from './address.actions';
import {AddressModel} from "../shared/address.model";
import {EducationModel} from "../shared/education.model";

export interface AddressState {
  data: AddressModel[]
}

export const initialState: AddressState = {data: []};

export const addressReducer = createReducer(
  initialState,
  on(addressDetailsLoaded, (state, payload) => state = payload),
  on(addressDeleted, (state, payload) => {
    let data = [...state.data].filter(e => e.id != payload.id)
    state = {...state, data}
    return state
  })
);

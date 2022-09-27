import {createReducer, on} from '@ngrx/store';
import {educationDetailsLoaded, educationDeleted} from './education.actions';
import {EducationModel} from "../shared/education.model";

export interface EducationState {
  data: EducationModel[]
}

export const initialState: EducationState = {data: []};

export const educationReducer = createReducer(
  initialState,
  on(educationDetailsLoaded, (state, payload) => state = payload),
  on(educationDeleted, (state, payload) => {
    let data = [...state.data].filter(e => e.id != payload.id)
    state = {...state, data}
    return state
  })
);

import {createReducer, on} from '@ngrx/store';
import {experienceDeleted, experienceDetailsLoaded} from './experience.actions';
import {ExperienceModel} from "../shared/experience.model";

export interface ExperienceState {
  data: ExperienceModel[]
}

export const initialState: ExperienceState = {data: []};

export const experienceReducer = createReducer(
  initialState,
  on(experienceDetailsLoaded, (state, payload) => state = payload),
  on(experienceDeleted, (state, payload) => {
    let data = [...state.data].filter(e => e.id != payload.id)
    state = {...state, data}
    return state
  })
);

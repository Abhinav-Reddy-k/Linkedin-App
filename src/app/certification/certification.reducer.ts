import {createReducer, on} from '@ngrx/store';
import {certificationDeleted, certificationDetailsLoaded} from './certification.actions';
import {CertificatationModel} from "../shared/certificatation.model";

export interface CertificationState {
  data: CertificatationModel[]
}

export const initialState: { data: CertificatationModel[] } = {data: []};

export const certificationReducer = createReducer(
  initialState,
  on(certificationDetailsLoaded, (state, payload) => state = payload),
  on(certificationDeleted, (state, payload) => {
    let data = [...state.data].filter(e => e.id != payload.id)
    state = {...state, data}
    return state
  })
);

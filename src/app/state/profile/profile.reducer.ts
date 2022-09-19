import { createReducer, on } from '@ngrx/store';
import { profileDetailsLoaded } from './profile.actions';
import {ProfileState} from "./profile.state";

const initialState:ProfileState= {
  email: "", firstname: "", headline: "", id: 0, imageUrl: "", lastname: "", password: "", phone: "", pronounId: 0
}

export const profileReducer = createReducer(
  initialState,
  on(profileDetailsLoaded, (state,profile) => state=profile)
);

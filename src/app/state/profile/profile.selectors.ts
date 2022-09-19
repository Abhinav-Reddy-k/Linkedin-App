import {createSelector} from "@ngrx/store";
import {AppState} from "../app.state";

export const selectProfile = (state:AppState) => state.profile;



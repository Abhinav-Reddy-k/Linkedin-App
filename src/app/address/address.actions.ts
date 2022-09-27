import {createAction, props} from '@ngrx/store';
import {AddressModel} from "../shared/address.model";

export const addressDetailsLoaded = createAction('[address Component] Address',props<{data:AddressModel[]}>());
export const addressDeleted = createAction('addressDeleted',props<{id:number}>());
export const addressUpdated = createAction('addressUpdated',props<{data:any}>());

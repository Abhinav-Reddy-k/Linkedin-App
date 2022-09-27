import {createAction, props} from '@ngrx/store';
import {CertificatationModel} from "../shared/certificatation.model";

export const certificationDetailsLoaded = createAction('[Certification Component] Certification',props<{data:CertificatationModel[]}>());
export const certificationDeleted = createAction('certificationDeleted',props<{id:number}>());

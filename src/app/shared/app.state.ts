import {ExperienceState} from "../experience/experience.reducer";
import {AddressState} from "../address/address.reducer";
import {EducationState} from "../education/education.reducer";
import {CertificationState} from "../certification/certification.reducer";
import {ProfileModel} from "./profile.model";

export interface AppState {
  login: {data:ProfileModel},
  experience: ExperienceState,
  address: AddressState,
  education: EducationState,
  certification: CertificationState
}

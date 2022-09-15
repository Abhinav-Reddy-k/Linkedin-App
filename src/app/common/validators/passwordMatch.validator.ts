import {FormGroup, ValidationErrors, ValidatorFn} from "@angular/forms";

// @ts-ignore
export const passwordMatchValidator: ValidatorFn = (formGroup: FormGroup): ValidationErrors | null => {
  // @ts-ignore
  if (formGroup.get('password').value === formGroup.get('confirm_password').value)
    return null;
  else
    return {passwordMismatch: true};
};

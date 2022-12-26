import { FormGroup, FormBuilder, Validators } from '@angular/forms';
export function NumberValidator(formControlName: string) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[formControlName];

    const regex = new RegExp('^[1-9][0-9]?$|^100$');

    if (control.errors && !control.errors['numberMatch']) {
      return null;
    }

    if (!regex.test(control.value)) {
      control.setErrors({ numberMatch: true });
    } else {
      control.setErrors(null);
    }
  };
}

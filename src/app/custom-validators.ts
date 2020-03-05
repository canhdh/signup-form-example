import { FormControl } from '@angular/forms';

export class CustomValidators {
    static passwordMatchValidator(control: FormControl) {
        const password: string = control.get('password').value;
        const confirmPassword: string = control.get('confirmPassword').value;

        if (password !== confirmPassword) {
            control.get('confirmPassword').setErrors({ NoPasswordMatch: true });
        }
    }
}

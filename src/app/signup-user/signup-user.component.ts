import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { FormControl, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CustomValidators } from '../custom-validators';

@Component({
  selector: 'app-signup-user',
  templateUrl: './signup-user.component.html',
  styleUrls: ['./signup-user.component.scss']
})
export class SignupUserComponent implements OnInit {

  user:User;

  userForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    // this.userForm = new FormGroup({
    //   'username': new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9]+$'), Validators.minLength(5), Validators.maxLength(25)]),
    //   'firstName': new FormControl('', Validators.required),
    //   'lastName': new FormControl('', Validators.required),
    //   'phoneNumber': new FormControl('', [Validators.required, Validators.pattern('^[0-9]+$')]),
    //   'email': new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]),
    //   'password': new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')]),
    //   'confirmPassword': new FormControl('', Validators.required)
    // }
    // );
    this.userForm = this.fb.group({
      'username': new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9]+$'), Validators.minLength(5), Validators.maxLength(25)]),
      'firstName': new FormControl('', Validators.required),
      'lastName': new FormControl('', Validators.required),
      'phoneNumber': new FormControl('', [Validators.required, Validators.pattern('^((\\+84-?)|0)+(9|8|7|3|5)[0-9]{8}$')]),
      'email': new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]),
      'password': new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')]),
      'confirmPassword': new FormControl('', Validators.required),
    }, {validators: CustomValidators.passwordMatchValidator}
    );
  }

  get username() { return this.userForm.get('username'); }

  get firstName() { return this.userForm.get('firstName'); }

  get lastName() { return this.userForm.get('lastName'); }

  get phoneNumber() { return this.userForm.get('phoneNumber'); }

  get email() { return this.userForm.get('email'); }

  get password() { return this.userForm.get('password'); }

  get confirmPassword() { return this.userForm.get('confirmPassword'); }


  onSubmit(){
    console.warn(this.userForm.value);
    window.alert('Sign up successful!')
  }

  addUser(user: User ): void {
    this.userService.addUser(user).subscribe(user => this.user);
  }
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CustomValidators } from '../custom-validators';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-user',
  templateUrl: './signup-user.component.html',
  styleUrls: ['./signup-user.component.scss']
})
export class SignupUserComponent implements OnInit {

  userForm: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private dataService: DataService,
  ) { }

  ngOnInit(): void {
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
    localStorage.setItem('username', this.userForm.get('username').value);
    localStorage.setItem('password', this.userForm.get('password').value);
    this.dataService.changeData({
      username: this.userForm.get('username').value,
      password: this.userForm.get('password').value
    });
    window.alert('Sign up successful!');
    this.router.navigate(['/signin']);
  }
}

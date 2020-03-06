import { Component, OnInit, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { SigninData } from '../signinData';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  signinData: {
    username: string,
    password: string
  };

  message: string;
  returnUrl: string;
  
  constructor(
    private dataService: DataService,
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService,
  ) { }

  userSigninForm: FormGroup;

  ngOnInit(): void {
    this.dataService.currentData.subscribe(signinData => this.signinData = signinData);
    this.userSigninForm = this.formBuilder.group({
      'username': new FormControl('', [Validators.required]),
      'password': new FormControl('', [Validators.required])
    });
    this.returnUrl = '/setting';
    this.authService.logout();
    console.warn(this.signinData);
  }

  get username() { return this.userSigninForm.get('username'); }

  get password() { return this.userSigninForm.get('password'); }

  onSubmit() {
    if (this.userSigninForm.get('username').value == localStorage.getItem('username')
      && this.userSigninForm.get('password').value == localStorage.getItem('password')){
      
        console.log("Login successful");
        localStorage.setItem('isLoggedIn',"true");
        localStorage.setItem('token', this.userSigninForm.get('password').value);
        this.router.navigate([this.returnUrl]);
      }
    else {
      this.message = "Please check your username and password!";
    } 
  }
}

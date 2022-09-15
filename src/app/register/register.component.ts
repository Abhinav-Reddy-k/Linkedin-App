import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from "@angular/forms";
import {passwordMatchValidator} from "../common/validators/passwordMatch.validator";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  doesPassMatch:boolean=false;

  form = new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('', [Validators.required, Validators.minLength(10)]),
    confirm_password:new FormControl('',Validators.required)
  },{validators:[passwordMatchValidator]})

  get email() {return this.form.get('email')}
  get password() { return this.form.get('password'); }
  get confirm_password() { return this.form.get('confirm_password'); }

  onPasswordInput() {
    if (this.form.hasError('passwordMismatch'))
      { // @ts-ignore
        this.confirm_password.setErrors([{'passwordMismatch': true}]);
      }
    else
      { // @ts-ignore
        this.confirm_password.setErrors(null);
      }
  }
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
  console.log(this.email?.value,this.password?.value,this.confirm_password?.value)
  }
}

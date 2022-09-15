import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from "@angular/forms";
import {passwordMatchValidator} from "../common/validators/passwordMatch.validator";
import {RegisterService} from "./register.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form = new FormGroup({
    firstName:new FormControl('',[Validators.required]),
    lastName:new FormControl('',[Validators.required]),
    phone:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('', [Validators.required, Validators.minLength(10)]),
    confirm_password:new FormControl('',Validators.required),
    pronounId:new FormControl(0,[Validators.required]),
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
  constructor(private registerService:RegisterService,private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if(!this.form.valid){
      return
    }
    this.registerService.registerUser({...this.form.value,imageUrl:"",headline:""}).subscribe((profile) => {
      this.router.navigate(["/profile"])
    },error => {
      console.log(error)
    })
  }
}

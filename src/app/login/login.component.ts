import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NgForm} from "@angular/forms";
import {LoginService} from "./login.service";
import {Router} from "@angular/router";
import {AppError} from "../common/errors/app-error";
import {NotFoundError} from "../common/errors/not-found-error";
import { Store } from '@ngrx/store';
import {login} from "./login.actions";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private loginService: LoginService, private router: Router,private store:Store) {
  }

  ngOnInit(): void {
  }

  onSubmit(creds: NgForm) {
    if (!creds.valid) {
      return
    }
    this.loginService.create(creds.value).subscribe({
      next: (profile) => {
        this.store.dispatch(login({data:profile}))
        this.router.navigate(["/profile"])
      },
      error:(err:AppError)=>{
        if(err instanceof NotFoundError){
          console.log("User Not Found")
        }
    }
    });
  }
}
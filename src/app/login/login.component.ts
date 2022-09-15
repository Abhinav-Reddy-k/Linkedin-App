import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {LoginService} from "./login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  profile:any;

  constructor(private loginService: LoginService,private router:Router) {
  }

  ngOnInit(): void {
  }

  onSubmit(creds: NgForm) {
    if(!creds.valid){
      return
    }
    this.loginService.authenticateUser(creds.value).subscribe((profile)=> {
      this.profile = profile;
      this.router.navigate(["/profile"])
    },error => {
      console.log(error)
    });
  }
}

import { Component, OnInit } from '@angular/core';
import {LoginService} from "../login/login.service";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private service:LoginService) { }

  ngOnInit(): void {
  }

}

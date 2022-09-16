import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile$:any;
  constructor(private store:Store) {
    // @ts-ignore
    this.profile$ = store.select((state) => state.login.data)
    this.profile$.subscribe(console.log)
  }
  ngOnInit(): void {

  }

}

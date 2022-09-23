import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {Router} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileObserver$:any;
  profile:any;

  constructor(private store:Store,private router: Router) {
    // @ts-ignore
    this.profileObserver$ = store.select((state) => state.login.data)
    this.profileObserver$.subscribe((data:any) =>this.profile = data)
  }
  ngOnInit(): void {
    if(!this.profile){
      this.router.navigate([""])
    }
  }


}

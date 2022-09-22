import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Linkedin';
  profileObserver$:any;
  profile:any;

  constructor(private store:Store,private router: Router) {
    // @ts-ignore
    this.profileObserver$ = store.select((state) => state.login.data)
    this.profileObserver$.subscribe((data:any) =>this.profile = data)
  }
  reloadPage() {
    this.router.navigate(["/auth/login"]).then(()=>    window.location.reload()
  )
  }

}

import {ErrorHandler, Injectable} from "@angular/core";
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({ providedIn: 'root' })
export class AppErrorHandler implements ErrorHandler{
  constructor(private _snackBar: MatSnackBar) {
  }
  handleError(error: Error): void {
    console.log("Global Error",error)
    this._snackBar.open(error.message, "close");
  }
}

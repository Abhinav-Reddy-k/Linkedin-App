import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError} from "rxjs/operators"
import {throwError} from "rxjs";
import {NotFoundError} from "../errors/not-found-error";
import {AppError} from "../errors/app-error";

export class HttpService {

  constructor(private baseUrl: string, private http: HttpClient) {
  }

  getAll() {
    return this.http.get(this.baseUrl).pipe(catchError(this.handleError))
  }


  getAllUrl(url:string){
    return this.http.get(this.baseUrl+url).pipe(catchError(this.handleError))
  }

  get(resource: any) {
    return this.http.get(this.baseUrl, resource).pipe(
      catchError(this.handleError)
    )
  }

  create(resource: any) {
    return this.http.post(this.baseUrl, resource).pipe(
      catchError(this.handleError)
    )
  }

  update(resource: any) {
    return this.http.put(this.baseUrl, resource).pipe(
      catchError(this.handleError)
    )
  }

  updateUrl(resource: any,url:string) {
    return this.http.put(this.baseUrl+url, resource).pipe(
      catchError(this.handleError)
    )
  }

  delete(resource: any) {
    return this.http.delete(this.baseUrl, resource).pipe(
      catchError(this.handleError)
    )
  }

  deleteUrl(url:string){
    return this.http.delete(this.baseUrl+url).pipe(
      catchError(this.handleError)
    )
  }


  private handleError(err: Response) {
    if (err.status === 404) {
      return throwError(() => new NotFoundError(err))
    }
    return throwError(() => new AppError(err))
  }
}

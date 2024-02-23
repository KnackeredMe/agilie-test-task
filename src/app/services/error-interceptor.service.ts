import { Injectable } from '@angular/core';
import {HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptorService implements HttpInterceptor {

  constructor(private snackBar: MatSnackBar) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
    return next.handle(req)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          this.openSnackBar(error.message, 'OK');
          return throwError(error);
        })
      )
  }

  public openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {panelClass: 'error-dialog'});
  }
}

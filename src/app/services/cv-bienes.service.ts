import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { cvBien } from '../models/cvBien';

@Injectable({
  providedIn: 'root',
})
export class CvBienesService {
  cvBaseUrl = 'http://localhost:3000/cvBien';
  cvHttpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  cvHandleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.log(
        `Error with ${error.status} status, body was: ${error.error}`
      );
    } else {
      console.log(
        `Backend returned code ${error.status}, body was: ${error.error}`
      );
    }
    return throwError(
      'Something happened with the request. Please try again later'
    );
  }

  constructor(private http: HttpClient) {}

  createBien(item: any): Observable<cvBien> {
    return this.http
      .post<cvBien>(this.cvBaseUrl, JSON.stringify(item), this.cvHttpOptions)
      .pipe(retry(2), catchError(this.cvHandleError));
  }

  getBienes() {
    return this.http
      .get<cvBien[]>(this.cvBaseUrl)
      .pipe(retry(2), catchError(this.cvHandleError));
  }
}

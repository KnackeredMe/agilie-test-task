import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ErrorHandlerService} from "./error-handler.service";
import {catchError, Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {IResponse} from "../models/response.model";

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private baseUrl: string = environment.baseUrl;
  private apiKey: string = environment.apiKey;

  constructor(
    private http: HttpClient,
    private errorHandler: ErrorHandlerService
  ) { }

  getTrending(offset: number): Observable<IResponse> {
    return this.http.get<IResponse>( this.baseUrl + `gifs/trending?api_key=${this.apiKey}&offset=${offset}&limit=24`)
      .pipe(catchError(this.errorHandler.handleError));
  }

  getSearch(query: string, offset: number): Observable<IResponse> {
    return this.http.get<IResponse>( this.baseUrl + `gifs/search?api_key=${this.apiKey}&q=${query}&offset=${offset}&limit=24`)
      .pipe(catchError(this.errorHandler.handleError));
  }
}

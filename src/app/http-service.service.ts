import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class HttpServiceService {

  apiUrl = 'http://127.0.0.1:8000';

  constructor(private _http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getMovies(): Observable<any> {
    return this._http.get<any>(this.apiUrl + '/api/getPeliculas');
  }


}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InsertMovie } from './insertData';

@Injectable({
  providedIn: 'root'
})


export class HttpServiceService {

  //apiUrl = 'http://127.0.0.1:8000';
  apiUrl = 'https://catalogobe-production.up.railway.app';

  constructor(private _http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getMovies(): Observable<any> {
    return this._http.get(this.apiUrl + '/api/getPeliculas');
  }

  getMovie(id:any): Observable<any> {
    return this._http.get(this.apiUrl + '/api/getPeliculas/' + id);
  }

  updateMovie(rows:any): Observable<any> {
    return this._http.put<any>(this.apiUrl + '/api/putPeliculas/'+rows, '');
  }

  addMovie(rows:any): Observable<any> {
    return this._http.post<any>(this.apiUrl + '/api/postPeliculas', rows);
  }

  delMovie(rows:any): Observable<any> {
    return this._http.delete<any>(this.apiUrl + '/api/deletePeliculas/'+rows);
  }

}






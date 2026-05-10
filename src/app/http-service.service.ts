import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InsertMovie } from './insertData';

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
    return this._http.get(this.apiUrl + '/api/getPeliculas');
  }

  getMovie(id:any): Observable<any> {
    return this._http.get(this.apiUrl + '/api/getPeliculas/' + id);
  }

  updateMovie(rows:any): Observable<any> {
    //const headers = {'Content-Type':'application/json'}
    //const body = JSON.stringify(rows)
    //console.log(body);
    //console.log(rows);
    

    //return this._http.put<any>(this.apiUrl + '/api/putPeliculas/', body, this.httpOptions);
    return this._http.put<any>(this.apiUrl + '/api/putPeliculas/'+rows, '');
  }

  addMovie(rows:any): Observable<any> {
    //const headers = {'Content-Type':'application/json'}
    //const body = JSON.stringify(rows)
    //console.log(body);
    //console.log(rows);
    

    //return this._http.put<any>(this.apiUrl + '/api/putPeliculas/', body, this.httpOptions);
    return this._http.post<any>(this.apiUrl + '/api/postPeliculas', rows);
  }

}






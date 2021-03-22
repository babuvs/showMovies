import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  apiUrl = 'http://localhost:3000/api/';

  constructor(private http: HttpClient) { }

  getMovies(): any {
    return this.http.get(this.apiUrl + 'movies/getRecord').toPromise();
  }
  createRecord(): any {
    return this.http.get(this.apiUrl + 'movies/createRecord').toPromise();
  }
}

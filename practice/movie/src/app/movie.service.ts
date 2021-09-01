import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Movie} from './movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  public API = 'http://localhost:3000/movie';
  constructor(public http: HttpClient) { }

  getAllMovie(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.API);
  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Cinema} from './cinema';

@Injectable({
  providedIn: 'root'
})
export class CinemaService {
  public API = 'http://localhost:3000/cinema';
  constructor(public http: HttpClient) { }

  getAll(): Observable<Cinema[]> {
    return this.http.get<Cinema[]>(this.API);
  }

  getById(id): Observable<Cinema[]> {
    return this.http.get<Cinema[]>(this.API + '/' + id).pipe();
  }

  delete(id): Observable<any> {
    return this.http.delete(this.API + '/' + id);
  }

  create(todo): Observable<Cinema> {
    return this.http.post<Cinema>(this.API, todo).pipe();
  }

  edit(todo, todoId): Observable<Cinema> {
    return this.http.put<Cinema>(this.API + '/' + todoId, todo).pipe();
  }

  search(keyword): Observable<Cinema[]> {
    return this.http.get<Cinema[]>(this.API + '?code=' + keyword);
  }

  searchByMovie(keyword): Observable<Cinema[]> {
    return this.http.get<Cinema[]>(this.API + '?movie.name_like=' + keyword);
  }

  sortByContent(): Observable<Cinema[]> {
    return this.http.get<Cinema[]>(this.API + '?_sort=movie.name');
  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IDivision} from '../model/division';

@Injectable({
  providedIn: 'root'
})
export class DivisionService {

  public API = 'http://localhost:3000/division';

  constructor(public http: HttpClient) {
  }

  getAllDivision(): Observable<IDivision[]> {
    return this.http.get<IDivision[]>(this.API).pipe();
  }
}

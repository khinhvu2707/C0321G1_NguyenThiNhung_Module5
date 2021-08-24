import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IRentType} from '../model/interface';

@Injectable({
  providedIn: 'root'
})
export class RentTypeService {

  public API = 'http://localhost:3000/rentType';

  constructor(public http: HttpClient) {
  }

  getAllRentType(): Observable<IRentType[]> {
    return this.http.get<IRentType[]>(this.API).pipe();
  }
}

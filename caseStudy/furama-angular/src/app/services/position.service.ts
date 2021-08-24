import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IPosition} from '../model/interface';

@Injectable({
  providedIn: 'root'
})
export class PositionService {

  public API = 'http://localhost:3000/position';

  constructor(public http: HttpClient) {
  }

  getAllPosition(): Observable<IPosition[]> {
    return this.http.get<IPosition[]>(this.API).pipe();
  }
}

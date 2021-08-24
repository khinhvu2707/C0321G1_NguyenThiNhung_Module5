import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IService} from '../model/service';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  public API = 'http://localhost:3000/service';

  constructor(public http: HttpClient) {
  }

  getAllService(): Observable<IService[]> {
    return this.http.get<IService[]>(this.API).pipe();
  }
}

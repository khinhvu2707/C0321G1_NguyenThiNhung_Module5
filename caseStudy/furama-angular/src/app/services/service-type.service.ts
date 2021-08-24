import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IServiceType} from '../model/serviceType';

@Injectable({
  providedIn: 'root'
})
export class ServiceTypeService {

  public API = 'http://localhost:3000/serviceType';

  constructor(public http: HttpClient) {
  }

  getAllServiceType(): Observable<IServiceType[]> {
    return this.http.get<IServiceType[]>(this.API).pipe();
  }
}

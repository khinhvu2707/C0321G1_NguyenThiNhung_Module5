import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ICustomerType} from '../model/interface';

@Injectable({
  providedIn: 'root'
})
export class CustomerTypeService {

  public API = 'http://localhost:3000/customerType';

  constructor(public http: HttpClient) {
  }

  getAllCustomerType(): Observable<ICustomerType[]> {
    return this.http.get<ICustomerType[]>(this.API).pipe();
  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ICustomer} from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  public API = ' http://localhost:3000/customer';

  constructor(public http: HttpClient) {
  }

  getAllCustomer(): Observable<ICustomer[]> {
    return this.http.get<ICustomer[]>(this.API).pipe();
  }

  deleteCustomer(id): Observable<any> {
    return this.http.delete(this.API + '/' + id);
  }

  createNewCustomer(customer): Observable<ICustomer> {
    return this.http.post<ICustomer>(this.API, customer).pipe();
  }

  editCustomer(customer, customerId): Observable<ICustomer> {
    return this.http.put<ICustomer>(this.API + '/' + customerId, customer).pipe();
  }
}

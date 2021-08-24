import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IContract} from '../model/contract';

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  public API = ' http://localhost:3000/contract';

  constructor(public http: HttpClient) {
  }

  getAllContract(): Observable<IContract[]> {
    return this.http.get<IContract[]>(this.API).pipe();
  }
}

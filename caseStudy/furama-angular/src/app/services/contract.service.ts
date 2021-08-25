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

  deleteContract(id): Observable<any> {
    return this.http.delete(this.API + '/' + id);
  }

  createNewContract(contract): Observable<IContract> {
    return this.http.post<IContract>(this.API, contract).pipe();
  }

  editContract(contract, contractId): Observable<IContract> {
    return this.http.put<IContract>(this.API + '/' + contractId, contract).pipe();
  }
}

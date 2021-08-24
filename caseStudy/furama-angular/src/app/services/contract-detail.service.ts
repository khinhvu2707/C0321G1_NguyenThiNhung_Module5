import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IContractDetail} from '../model/interface';

@Injectable({
  providedIn: 'root'
})
export class ContractDetailService {

  public API = 'http://localhost:3000/contractDetail';

  constructor(public http: HttpClient) {
  }

  getAllContractDetail(): Observable<IContractDetail[]> {
    return this.http.get<IContractDetail[]>(this.API).pipe();
  }
}

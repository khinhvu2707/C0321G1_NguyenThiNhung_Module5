import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IContractDetail} from '../model/contractDetail';

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

  getContractDetailById(id): Observable<IContractDetail[]> {
    return this.http.get<IContractDetail[]>(this.API + '/' + id).pipe();
  }

  deleteContractDetail(id): Observable<any> {
    return this.http.delete(this.API + '/' + id);
  }

  createNewContractDetail(contractDetail): Observable<IContractDetail> {
    return this.http.post<IContractDetail>(this.API, contractDetail).pipe();
  }

  editContractDetail(contractDetail, contractDetailId): Observable<IContractDetail> {
    return this.http.put<IContractDetail>(this.API + '/' + contractDetailId, contractDetail).pipe();
  }
}

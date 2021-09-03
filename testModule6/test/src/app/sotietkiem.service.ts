import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {sotietkiem} from './sotietkiem';

@Injectable({
  providedIn: 'root'
})
export class SotietkiemService {
  public API = 'http://localhost:8080/stk/api';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(public http: HttpClient) {
  }

  getAllSTK(index: number): Observable<sotietkiem[]> {
    return this.http.get<sotietkiem[]>(this.API + '?index=' + index);
  }

  getListSearch(page: number, name: string): Observable<sotietkiem[]> {
    return this.http.get<any>(this.API + '/list?page=' + page);
  }

  getAllNotPage(): Observable<sotietkiem[]> {
    return this.http.get<sotietkiem[]>(this.API + '/stk-not-page');
  }

  getAll(): Observable<sotietkiem[]> {
    return this.http.get<sotietkiem[]>(this.API);
  }

  searchByCus(nameCustomer: string): Observable<sotietkiem[]> {
    return this.http.get<sotietkiem[]>(this.API + '/search?tenKhachHang=' + nameCustomer);
  }

  getById(id): Observable<sotietkiem[]> {
    return this.http.get<sotietkiem[]>(this.API + '/' + id).pipe();
  }

  delete(id): Observable<any> {
    return this.http.delete(this.API + '/' + id);
  }

  create(sotk): Observable<sotietkiem> {
    return this.http.post<sotietkiem>(this.API, sotk).pipe();
  }

  edit(sotk, soId): Observable<sotietkiem> {
    return this.http.put<sotietkiem>(this.API + '/' + soId, sotk).pipe();
  }

}

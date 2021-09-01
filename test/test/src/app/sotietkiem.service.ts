import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {sotietkiem} from './sotietkiem';

@Injectable({
  providedIn: 'root'
})
export class SotietkiemService {
  public API = 'http://localhost:3000/sotietkiem';

  constructor(public http: HttpClient) {
  }

  getAll(): Observable<sotietkiem[]> {
    return this.http.get<sotietkiem[]>(this.API);
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

  search(keyword): Observable<sotietkiem[]> {
    return this.http.get<sotietkiem[]>(this.API + '?id=' + keyword);
  }

  searchByCustomer(keyword): Observable<sotietkiem[]> {
    return this.http.get<sotietkiem[]>(this.API + '?tenkhachHang_like=' + keyword);
  }

}

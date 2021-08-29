import {Injectable} from '@angular/core';
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

  getServiceById(id): Observable<IService[]> {
    return this.http.get<IService[]>(this.API + '/' + id).pipe();
  }

  deleteService(id): Observable<any> {
    return this.http.delete(this.API + '/' + id);
  }

  createNewService(service): Observable<IService> {
    return this.http.post<IService>(this.API, service).pipe();
  }

  editService(service, serviceId): Observable<IService> {
    return this.http.put<IService>(this.API + '/' + serviceId, service).pipe();
  }
}

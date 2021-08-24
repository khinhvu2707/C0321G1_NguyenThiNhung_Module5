import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IEmployee} from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  public API = 'http://localhost:3000/employees';

  constructor(public http: HttpClient) {
  }

  getAllEmployee(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this.API).pipe();
  }

  getEmployeeById(id): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this.API + '/' + id).pipe();
  }

  deleteEmployee(id): Observable<any> {
    return this.http.delete(this.API + '/' + id);
  }

  createNewEmployee(employee): Observable<IEmployee> {
    return this.http.post<IEmployee>(this.API, employee).pipe();
  }
}

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
    return this.http.get<IEmployee[]>(this.API);
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

  editEmployee(employee, employeeId): Observable<IEmployee> {
    return this.http.put<IEmployee>(this.API + '/' + employeeId, employee).pipe();
  }

  search(keyword): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this.API + '?employeeName_like=' + keyword);
  }

  searchByCode(keyword): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this.API + '?employeeCode=' + keyword);
  }

  sortByName(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this.API + '?_sort=employeeName');
  }
}

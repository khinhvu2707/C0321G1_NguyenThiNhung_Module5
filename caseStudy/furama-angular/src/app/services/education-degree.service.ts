import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IEducationDegree} from '../model/interface';

@Injectable({
  providedIn: 'root'
})
export class EducationDegreeService {

  public API = 'http://localhost:3000/educationDegree';

  constructor(public http: HttpClient) {
  }

  getAllEducation(): Observable<IEducationDegree[]> {
    return this.http.get<IEducationDegree[]>(this.API).pipe();
  }
}

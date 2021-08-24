import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IAttachService} from '../model/attachService';

@Injectable({
  providedIn: 'root'
})
export class AttachServiceService {

  public API = ' http://localhost:3000/attachService';

  constructor(public http: HttpClient) {
  }

  getAllAttachService(): Observable<IAttachService[]> {
    return this.http.get<IAttachService[]>(this.API).pipe();
  }
}

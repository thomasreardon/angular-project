import { environment } from './../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
 
  constructor(private httpClient: HttpClient) { }

  login(credentials: any): Observable<any> {
    const url = `${environment.apiUrl}/login`;
    return this.httpClient.post(url, credentials);
  }

}



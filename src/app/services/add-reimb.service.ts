import { environment } from './../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AddReimbService {

  constructor(private httpClient: HttpClient) { }

  addReimb(reimbursement: any) {
    const url = `${environment.apiUrl}/addReimbursement`;
    return this.httpClient.post(url, reimbursement);
  }

}

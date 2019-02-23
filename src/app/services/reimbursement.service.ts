import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReimbursementService {

 

  constructor(private httpClient: HttpClient) { }

  fetchReimb() {
    const url = `${environment.apiUrl}/viewreimbursement`;
    return this.httpClient.get(url);
  
  }
  
  fetchEmpReimb(id: any) {
    const url = `${environment.apiUrl}/viewreimbursement`;
    return this.httpClient.post(url, id);
  
  }
  updateReimb(reimbursement: any) {
    const url = `${environment.apiUrl}/updatereimbursement`;
    return this.httpClient.post(url, reimbursement);
  
  }
  updateApproveReimb(reimbursement: any) {
    const url = `${environment.apiUrl}/updatereimbursement`;
    return this.httpClient.post(url, reimbursement);
  
  }
  deniedReimb() {
    const url = `${environment.apiUrl}/deniedreimbursement`;
    return this.httpClient.get(url);
  
  }
  allReimb() {
    const url = `${environment.apiUrl}/allreimbursement`;
    return this.httpClient.get(url);
  
  }
  acceptedReimb() {
    const url = `${environment.apiUrl}/acceptedreimbursement`;
    return this.httpClient.get(url);
  
  }
  pendingReimb() {
    const url = `${environment.apiUrl}/pendingreimbursement`;
    return this.httpClient.get(url);
  
  }
}


import { ReimbursementService } from './../../services/reimbursement.service';
import { Component } from '@angular/core';
import { Reimbursement } from 'src/app/models/Reimbursement.model';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reimbursements',
  templateUrl: './reimbursements.component.html',
  styleUrls: ['./reimbursements.component.css']
})
export class ReimbursementsComponent {

  reimbursements = [];
  constructor(private reimbursementService: ReimbursementService,
              private cookie: CookieService,
              private router: Router) { }

  obj: JSON;
  currentReimbursement = '';



  logout() {
    console.log("logging");
    this.cookie.deleteAll();
      this.cookie.delete('id');
      this.cookie.delete('user_role');
      this.router.navigateByUrl('');
  }
  viewReimbursements() {
    this.reimbursementService.fetchReimb()
    .subscribe( (payload) => {
      console.log(payload);
      for (const key in payload) {
             if (payload.hasOwnProperty(key)) {
               JSON.parse(JSON.stringify(payload[key]));
               
      // this.reimbursements.concat(payload);
             }
              }
            },
     (error) => console.log(error));
    }

  }


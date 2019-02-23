import { StatusPipePipe } from 'src/app/pipes/status-pipe.pipe';
import { PipePipe } from './../../pipes/pipe.pipe';
import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit } from '@angular/core';
import { ReimbursementService } from 'src/app/services/reimbursement.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-reimbursements',
  templateUrl: './all-reimbursements.component.html',
  styleUrls: ['./all-reimbursements.component.css']
})
export class AllReimbursementsComponent implements OnInit {
  
  id:any;
  constructor(private reimbursementService: ReimbursementService,
              private cookie: CookieService,
              private router: Router,
              private pipe: PipePipe,
              private statusPipe: StatusPipePipe) { }

  reimbursements: any;

  logout(){
    this.cookie.deleteAll();
      this.cookie.delete('id');
      this.cookie.delete('user_role');
  }
  ngOnInit() {
    this.viewReimbursements();
    this.id = this.cookie.get('id');
  }
  

  viewReimbursements() {
    this.reimbursementService.fetchEmpReimb(this.id)
    .subscribe( (payload) => {
      console.log(payload);
      for (const key in payload) {
             if (payload.hasOwnProperty(key)) {
              this.reimbursements = payload;
                }
              }
            },
     (error) => console.log(error));
    }


}

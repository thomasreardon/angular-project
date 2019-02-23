import { StatusPipePipe } from './../../pipes/status-pipe.pipe';
import { PipePipe } from './../../pipes/pipe.pipe';
import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit } from '@angular/core';
import { ReimbursementService } from 'src/app/services/reimbursement.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manager-reimb',
  templateUrl: './manager-reimb.component.html',
  styleUrls: ['./manager-reimb.component.css']
})
export class ManagerReimbComponent implements OnInit {

  id: any;
  constructor(private reimbursementService: ReimbursementService,
              private cookie: CookieService,
              private router: Router,
              private pipe: PipePipe,
              private statusPipe: StatusPipePipe) { }

  reimbursements: any;

  ngOnInit() {
    this.viewReimbursements();
    this.id = this.cookie.get('id');
  }
    logout() {
      this.cookie.deleteAll();
      this.router.navigateByUrl('');
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

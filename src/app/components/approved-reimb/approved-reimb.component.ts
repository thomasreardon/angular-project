import { PipePipe } from 'src/app/pipes/pipe.pipe';
import { Component, OnInit } from '@angular/core';
import { ReimbursementService } from 'src/app/services/reimbursement.service';
import { StatusPipePipe } from 'src/app/pipes/status-pipe.pipe';

@Component({
  selector: 'app-approved-reimb',
  templateUrl: './approved-reimb.component.html',
  styleUrls: ['./approved-reimb.component.css']
})
export class ApprovedReimbComponent implements OnInit {

  constructor(private reimbursementService: ReimbursementService,
              private pipe: PipePipe,
              private statusPipe: StatusPipePipe) { }

  reimbursements: any;

  ngOnInit() {
    this.viewReimbursements();
  }
  
  viewReimbursements() {
    this.reimbursementService.acceptedReimb()
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
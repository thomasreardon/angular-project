import { StatusPipePipe } from './../../pipes/status-pipe.pipe';
import { Component, OnInit } from '@angular/core';
import { ReimbursementService } from 'src/app/services/reimbursement.service';
import { PipePipe } from 'src/app/pipes/pipe.pipe';

@Component({
  selector: 'app-all-reimb',
  templateUrl: './all-reimb.component.html',
  styleUrls: ['./all-reimb.component.css']
})
export class AllReimbComponent implements OnInit {

  constructor(private reimbursementService: ReimbursementService,
              private pipe: PipePipe,
              private statusPipe: StatusPipePipe) { }

  reimbursements:any;
  

  ngOnInit() {
    this.viewReimbursements();
  }

  viewReimbursements() {
    this.reimbursementService.allReimb()
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
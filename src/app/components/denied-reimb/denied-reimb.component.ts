import { StatusPipePipe } from './../../pipes/status-pipe.pipe';
import { Component, OnInit } from '@angular/core';
import { ReimbursementService } from 'src/app/services/reimbursement.service';
import { PipePipe } from 'src/app/pipes/pipe.pipe';

@Component({
  selector: 'app-denied-reimb',
  templateUrl: './denied-reimb.component.html',
  styleUrls: ['./denied-reimb.component.css']
})
export class DeniedReimbComponent implements OnInit {

  constructor(private reimbursementService: ReimbursementService,
              private pipe: PipePipe,
              private statusPipe: StatusPipePipe) { }

  reimbursements: any;
  

  ngOnInit() {
    this.viewReimbursements();
    
  }

  viewReimbursements() {
    this.reimbursementService.deniedReimb()
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
import { StatusPipePipe } from './../../pipes/status-pipe.pipe';
import { PipePipe } from './../../pipes/pipe.pipe';
import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit } from '@angular/core';
import { ReimbursementService } from 'src/app/services/reimbursement.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pending-reimb',
  templateUrl: './pending-reimb.component.html',
  styleUrls: ['./pending-reimb.component.css']
})
export class PendingReimbComponent implements OnInit {

  constructor(private reimbursementService: ReimbursementService,
              private cookie: CookieService,
              private router: Router,
              private pipe: PipePipe,
              private statusPipe: StatusPipePipe) { }

  reimbursements: any;
  status = "";
  user_id: any;

  submit(){
    this.router.navigateByUrl('reimbursements-list');
  }

  ngOnInit() {
    this.viewReimbursements();
    this.user_id = this.cookie.get('id');
  }

  viewReimbursements() {
    this.reimbursementService.pendingReimb()
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
    updateReimb(reimb: any) {
     // console.log(reimb.authorId);
     // console.log(this.cookie.get('id'));
      if(reimb.authorId != this.cookie.get('id')) {
      if(this.status == '2') {
        reimb.resolverId = this.user_id;
        reimb.reimbStatusId = 2;
        console.log(reimb);
      
        this.reimbursementService.updateReimb(reimb).subscribe( (payload) => {
        console.log(payload);
         
        }, (err) => {
          console.log(err);
        });
     // } else {
       //   alert("Invalid username or password.")
  
       this.status = "";
      }
      else if(this.status == '1'){
        
        reimb.resolverId = this.user_id;
        reimb.reimbStatusId = 1;
        console.log(reimb);
        this.reimbursementService.updateReimb(reimb).subscribe( (payload) => {
          console.log(payload);
   
         }, (err) => {
           console.log(err);
         });
      // } else {
        //   alert("Invalid username or password.")
   
        this.status = "";
      }
   } else {
     alert("Manager's cant edit their own reimbursements!")
   this.status = "";
   }
   
  }
  }
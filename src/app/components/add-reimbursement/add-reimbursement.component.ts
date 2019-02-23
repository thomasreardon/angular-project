import { AddReimbService } from './../../services/add-reimb.service';
import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-add-reimbursement',
  templateUrl: './add-reimbursement.component.html',
  styleUrls: ['./add-reimbursement.component.css']
})
export class AddReimbursementComponent implements OnInit {

  user_id:any;

  erDescription = '';
  erAmount: any;
  reimbTypeId: any;
  authorId:any;

  constructor(private router: Router, 
              private cookie: CookieService,
              private addService: AddReimbService) {

}
  ngOnInit(){
    this.user_id = this.cookie.get('id');
  }

  logout() {
    this.cookie.deleteAll();
    this.router.navigateByUrl('');
  }

  addReimb(): any {
    const reimbursement = {
      erAmount: this.erAmount,
      erDescription: this.erDescription,
      reimbTypeId: this.reimbTypeId,
      authorId: this.user_id
    };
    console.log(reimbursement);
    this.addService.addReimb(reimbursement).subscribe( (payload) => {
       console.log(payload);

      }, (err) => {
        console.log(err);
      });
   // } else {
     //   alert("Invalid username or password.")
     this.router.navigateByUrl('reimbursements-list');
     
    }
    
}



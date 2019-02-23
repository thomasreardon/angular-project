import { AddReimbService } from './../../services/add-reimb.service';
import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-emp-add-reimb',
  templateUrl: './emp-add-reimb.component.html',
  styleUrls: ['./emp-add-reimb.component.css']
})
export class EmpAddReimbComponent implements OnInit {
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
   this.router.navigateByUrl('emp-Reimb');
  }

}
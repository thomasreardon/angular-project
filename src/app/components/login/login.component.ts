import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  username = '';
  password = '';
  id: any;
  roleId: any;

    constructor(private router: Router,
                private cookie: CookieService,
                private loginService: LoginService) { }
   ngOnInit(){ 
      this.cookie.deleteAll();
      console.log(this.cookie.get('id'));
      this.cookie.delete('id');
      this.cookie.delete('user_role');
    }
    login(): any {
        const credentials = {
          username: this.username,
          password: this.password
        };

        this.loginService.login(credentials).subscribe( (payload) => {
           console.log(payload);
           this.roleId = payload.roleId;
           this.cookie.set('id' , payload.id);
           this.cookie.set('user_role' , this.roleId);

         //   for (const key in payload) {
           //  if(payload.hasOwnProperty(key)) {
           if (this.roleId == '1') {
              this.router.navigateByUrl('/reimbursements-list');

             } else if (this.roleId == '2') {
              
               this.router.navigateByUrl('emp-Reimb');

             } else {
                alert('Invalid credentials!');
             }

          }, (err) => {
            console.log(err);
          });
       // } else {
         //   alert("Invalid username or password.")

        }
    }


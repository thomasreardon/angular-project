import { AddReimbService } from './services/add-reimb.service';
import { LoginService } from './services/login.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReimbursementsComponent } from './components/reimbursements/reimbursements.component';
import { LoginComponent } from './components/login/login.component';
import { ReimbursementService } from './services/reimbursement.service';
import { HttpClientModule } from '@angular/common/http';
import { AllReimbursementsComponent } from './components/all-reimbursements/all-reimbursements.component';
import { AddReimbursementComponent } from './components/add-reimbursement/add-reimbursement.component';
import { DeniedReimbComponent } from './components/denied-reimb/denied-reimb.component';
import { ApprovedReimbComponent } from './components/approved-reimb/approved-reimb.component';
import { PendingReimbComponent } from './components/pending-reimb/pending-reimb.component';
import { AllReimbComponent } from './components/all-reimb/all-reimb.component';
import { EmpAddReimbComponent } from './components/emp-add-reimb/emp-add-reimb.component';
import { CookieService } from 'ngx-cookie-service';
import { ManagerReimbComponent } from './components/manager-reimb/manager-reimb.component';
import { PipePipe } from './pipes/pipe.pipe';
import { StatusPipePipe } from './pipes/status-pipe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ReimbursementsComponent,
    LoginComponent,
    AllReimbursementsComponent,
    AddReimbursementComponent,
    DeniedReimbComponent,
    ApprovedReimbComponent,
    PendingReimbComponent,
    AllReimbComponent,
    EmpAddReimbComponent,
    ManagerReimbComponent,
    PipePipe,
    StatusPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [LoginService, PipePipe, StatusPipePipe, ReimbursementService, AddReimbService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }

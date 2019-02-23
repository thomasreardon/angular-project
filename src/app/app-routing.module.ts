import { ManagerReimbComponent } from './components/manager-reimb/manager-reimb.component';
import { AllReimbComponent } from './components/all-reimb/all-reimb.component';
import { AddReimbursementComponent } from './components/add-reimbursement/add-reimbursement.component';
import { AllReimbursementsComponent } from './components/all-reimbursements/all-reimbursements.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReimbursementsComponent } from './components/reimbursements/reimbursements.component';
import { DeniedReimbComponent } from './components/denied-reimb/denied-reimb.component';
import { PendingReimbComponent } from './components/pending-reimb/pending-reimb.component';
import { ApprovedReimbComponent } from './components/approved-reimb/approved-reimb.component';
import { EmpAddReimbComponent } from './components/emp-add-reimb/emp-add-reimb.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  }, {
    path: 'emp-Add',
    component: EmpAddReimbComponent
  }, {
    path: 'man-Reimb',
    component: ManagerReimbComponent
  },  {
    path: 'reimbursements-list',
    component: ReimbursementsComponent
  }, {
   path: 'emp-Reimb',
   component: AllReimbursementsComponent
  }, {
    path: 'denied-reimb',
    component: DeniedReimbComponent
   }, {
    path: 'approved-reimb',
    component: ApprovedReimbComponent
   }, {
    path: 'pending-reimb',
    component: PendingReimbComponent
   }, {
    path: 'add-Reimb',
    component: AddReimbursementComponent
   }, {
    path: 'all-reimb',
    component: AllReimbComponent
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

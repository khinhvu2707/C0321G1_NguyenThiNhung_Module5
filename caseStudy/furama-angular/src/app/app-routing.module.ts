import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './components/home/home.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {ListEmployeeComponent} from './components/employee/list-employee/list-employee.component';
import {CreateEmployeeComponent} from './components/employee/create-employee/create-employee.component';
import {EditEmployeeComponent} from './components/employee/edit-employee/edit-employee.component';
import {ViewEmployeeComponent} from './components/employee/view-employee/view-employee.component';
import {CreateCustomerComponent} from './components/customer/create-customer/create-customer.component';
import {EditCustomerComponent} from './components/customer/edit-customer/edit-customer.component';
import {ListCustomerComponent} from './components/customer/list-customer/list-customer.component';
import {ViewCustomerComponent} from './components/customer/view-customer/view-customer.component';
import {CreateContractComponent} from './components/contract/create-contract/create-contract.component';
import {EditContractComponent} from './components/contract/edit-contract/edit-contract.component';
import {ListContractComponent} from './components/contract/list-contract/list-contract.component';
import {ViewContractComponent} from './components/contract/view-contract/view-contract.component';
import {CreateContractDetailComponent} from './components/contract-detail/create-contract-detail/create-contract-detail.component';
import {EditContractDetailComponent} from './components/contract-detail/edit-contract-detail/edit-contract-detail.component';
import {ViewContractDetailComponent} from './components/contract-detail/view-contract-detail/view-contract-detail.component';
import {ListContractDetailComponent} from './components/contract-detail/list-contract-detail/list-contract-detail.component';
import {CreateServiceComponent} from './components/service/create-service/create-service.component';
import {EditServiceComponent} from './components/service/edit-service/edit-service.component';
import {ListServiceComponent} from './components/service/list-service/list-service.component';
import {ViewServiceComponent} from './components/service/view-service/view-service.component';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'employee-list', component: ListEmployeeComponent},
  {path: 'employee-create', component: CreateEmployeeComponent},
  {path: 'employee-edit/:id', component: EditEmployeeComponent},
  {path: 'employee-view/:id', component: ViewEmployeeComponent},
  {path: 'customer-list', component: ListCustomerComponent},
  {path: 'customer-create', component: CreateCustomerComponent},
  {path: 'customer-edit', component: EditCustomerComponent},
  {path: 'customer-view', component: ViewCustomerComponent},
  {path: 'contract-list', component: ListContractComponent},
  {path: 'contract-create', component: CreateContractComponent},
  {path: 'contract-edit', component: EditContractComponent},
  {path: 'contract-view', component: ViewContractComponent},
  {path: 'contract-detail-list', component: ListContractDetailComponent},
  {path: 'contract-detail-create', component: CreateContractDetailComponent},
  {path: 'contract-detail-edit', component: EditContractDetailComponent},
  {path: 'contract-detail-view', component: ViewContractDetailComponent},
  {path: 'service-list', component: ListServiceComponent},
  {path: 'service-create', component: CreateServiceComponent},
  {path: 'service-edit', component: EditServiceComponent},
  {path: 'service-view', component: ViewServiceComponent},

  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule, ReactiveFormsModule],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {
}

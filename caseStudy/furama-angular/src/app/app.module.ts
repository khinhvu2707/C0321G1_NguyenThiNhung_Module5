import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {MatDialogModule} from '@angular/material/dialog';
import {ToastrModule} from 'ngx-toastr';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
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
import {DialogEmployeeComponent} from './components/employee/dialog-employee/dialog-employee.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DialogContractDetailComponent} from './components/contract-detail/dialog-contract-detail/dialog-contract-detail.component';
import {DialogServiceComponent} from './components/service/dialog-service/dialog-service.component';
import {DialogCustomerComponent} from './components/customer/dialog-customer/dialog-customer.component';
import {DialogContractComponent} from './components/contract/dialog-contract/dialog-contract.component';

@NgModule({
  declarations: [
    AppComponent, HomeComponent, PageNotFoundComponent,
    ListEmployeeComponent, CreateEmployeeComponent, EditEmployeeComponent, ViewEmployeeComponent,
    CreateCustomerComponent, EditCustomerComponent, ListCustomerComponent, ViewCustomerComponent,
    CreateContractComponent, EditContractComponent, ListContractComponent, ViewContractComponent,
    CreateContractDetailComponent, EditContractDetailComponent, ViewContractDetailComponent, ListContractDetailComponent,
    CreateServiceComponent, EditServiceComponent, ListServiceComponent, ViewServiceComponent, DialogEmployeeComponent,
    DialogContractDetailComponent, DialogServiceComponent, DialogCustomerComponent, DialogContractComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    MatDialogModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DialogEmployeeComponent]
})
export class AppModule {
}

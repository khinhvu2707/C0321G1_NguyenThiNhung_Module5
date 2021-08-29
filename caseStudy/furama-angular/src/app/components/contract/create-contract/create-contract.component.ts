import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../../../services/customer.service';
import {Router} from '@angular/router';
import {IEmployee} from '../../../model/employee';
import {ICustomer} from '../../../model/customer';
import {IService} from '../../../model/service';
import {EmployeeService} from '../../../services/employee.service';
import {ServiceService} from '../../../services/service.service';
import {ContractService} from '../../../services/contract.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-create-contract',
  templateUrl: './create-contract.component.html',
  styleUrls: ['./create-contract.component.css']
})
export class CreateContractComponent implements OnInit {
  public contractForm: FormGroup;
  public customers: ICustomer[] = [];
  public employees: IEmployee[] = [];
  public services: IService[] = [];

  constructor(public customerService: CustomerService,
              public employeeService: EmployeeService,
              public serviceService: ServiceService,
              public contractService: ContractService,
              public router: Router,
              private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.initfrom();
    this.getAllCustomer();
    this.getAllEmployee();
    this.getAllService();
  }


  onSubmit() {
    this.contractService.createNewContract(this.contractForm.value).subscribe(data => {
      console.log(this.contractForm.value);
      this.router.navigateByUrl('/contract-list');
      this.toastr.success('Thanks!', 'create new Contract successfully !');
    });
  }

  initfrom() {
    this.contractForm = new FormGroup({
      contractStartDate: new FormControl('', [Validators.required]),
      contractEndDate: new FormControl('', [Validators.required]),
      contractDeposit: new FormControl('', [Validators.required, Validators.min(0)]),
      contractTotalMoney: new FormControl('', [Validators.required, Validators.min(0)]),
      employee: new FormControl('', [Validators.required]),
      customer: new FormControl('', [Validators.required]),
      service: new FormControl('', [Validators.required])
    });
  }

  getAllEmployee() {
    this.employeeService.getAllEmployee().subscribe(data => {
      this.employees = data;
    });
  }

  getAllCustomer() {
    this.customerService.getAllCustomer().subscribe(data => {
      this.customers = data;
    });
  }

  getAllService() {
    this.serviceService.getAllService().subscribe(data => {
      this.services = data;
    });
  }
}

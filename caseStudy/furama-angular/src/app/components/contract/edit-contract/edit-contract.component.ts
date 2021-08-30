import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {ICustomer} from '../../../model/customer';
import {IEmployee} from '../../../model/employee';
import {IService} from '../../../model/service';
import {CustomerService} from '../../../services/customer.service';
import {EmployeeService} from '../../../services/employee.service';
import {ServiceService} from '../../../services/service.service';
import {ContractService} from '../../../services/contract.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-edit-contract',
  templateUrl: './edit-contract.component.html',
  styleUrls: ['./edit-contract.component.css']
})
export class EditContractComponent implements OnInit {

  public contractForm: FormGroup;
  public customers: ICustomer[] = [];
  public employees: IEmployee[] = [];
  public services: IService[] = [];
  private contractId: number;

  constructor(public customerService: CustomerService,
              public employeeService: EmployeeService,
              public serviceService: ServiceService,
              public contractService: ContractService,
              public router: Router,
              public activatedRoute: ActivatedRoute,
              private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.initfrom();
    this.getAllCustomer();
    this.getAllEmployee();
    this.getAllService();
    this.activatedRoute.params.subscribe(data => {
      this.contractId = data.id;
      console.log(this.contractId);
      this.contractService.getContractById(this.contractId).subscribe(data2 => {
        this.contractForm.patchValue(data2);
        console.log(data2);
      });
    });
  }


  edit() {
    this.contractService.editContract(this.contractForm.value, this.contractId).subscribe(data => {
      this.router.navigateByUrl('/contract-list');
      this.toastr.success('Thanks!', 'Edit Contract Detail successfully !');
    });
  }

  compareFn(c1: any, c2: any): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }

  initfrom() {
    this.contractForm = new FormGroup({
      contractDate: new FormGroup({
        contractStartDate: new FormControl('', [Validators.required]),
        contractEndDate: new FormControl('', [Validators.required]),
      }, this.checkDate),
      contractDeposit: new FormControl('', [Validators.required, Validators.min(1)]),
      contractTotalMoney: new FormControl('', [Validators.required, Validators.min(1)]),
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


  checkDate(abstractControl: AbstractControl): any {
    const star = new Date(abstractControl.value.contractStartDate);
    const end = new Date(abstractControl.value.contractEndDate);
    return star <= end ? null : {errorCode: true};
  }
}

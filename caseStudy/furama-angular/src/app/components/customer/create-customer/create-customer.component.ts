import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../../../services/customer.service';
import {CustomerTypeService} from '../../../services/customer-type.service';
import {Router} from '@angular/router';
import {ICustomerType} from '../../../model/customerType';
import {ToastrService} from 'ngx-toastr';
import {ICustomer} from '../../../model/customer';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  public customerForm: FormGroup;
  public customerType: ICustomerType[] = [];
  private gender: number;
  private customers: ICustomer[] = [];

  constructor(public customerService: CustomerService,
              public customerTypeList: CustomerTypeService,
              public router: Router, private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.initfrom();
    this.getAllData();
  }

  getAllData() {
    this.customerTypeList.getAllCustomerType().subscribe(data => {
      this.customerType = data;
    });
    this.customerService.getAllCustomer().subscribe(data => {
      this.customers = data;
      console.log(this.customers);
    });
  }

  onSubmit() {
    this.gender = Number(this.customerForm.value.customerGender);
    this.customerForm.value.customerGender = this.gender;
    this.customerService.createNewCustomer(this.customerForm.value).subscribe(data => {
      console.log(this.customerForm.value);
      this.router.navigateByUrl('/customer-list');
      this.toastr.success('Thanks!', 'Create new Customer successfully !');
    });
  }

  initfrom() {
    this.customerForm = new FormGroup({
      customerCode: new FormControl('', [Validators.required, Validators.pattern('^KH-\\d{4}$')]),
      customerType: new FormControl('', [Validators.required]),
      customerName: new FormControl('', [Validators.required]),
      customerBirthday: new FormControl('', [Validators.required]),
      customerGender: new FormControl('', [Validators.required]),
      customerIdCard: new FormControl('', [Validators.required, Validators.pattern('^\\d{9}$|^\\d{12}$')]),
      customerPhone: new FormControl('', [Validators.required, Validators.pattern('^090\\d{7}$|^\\(84\\)\\+90\\d{7}$|^091\\d{7}$|^\\(84\\)\\+91\\d{7}$')]),
      customerEmail: new FormControl('', [Validators.required, Validators.email]),
      customerAddress: new FormControl('', [Validators.required]),
    });
  }

}

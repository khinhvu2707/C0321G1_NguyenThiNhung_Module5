import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ICustomerType} from '../../../model/customerType';
import {CustomerService} from '../../../services/customer.service';
import {CustomerTypeService} from '../../../services/customer-type.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {

  public customerForm: FormGroup;
  public customerType: ICustomerType[] = [];
  private gender: number;
  private customerId: number;

  constructor(public customerService: CustomerService,
              public customerTypeList: CustomerTypeService,
              public router: Router, private toastr: ToastrService,
              public activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.initfrom();
    this.getAllData();
    this.activatedRoute.params.subscribe(data => {
      this.customerId = data.id;
      console.log(this.customerId);
      this.customerService.getCustomerById(this.customerId).subscribe(data2 => {
        this.customerForm.patchValue(data2);
        console.log(data2);
      });
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

  getAllData() {
    this.customerTypeList.getAllCustomerType().subscribe(data => {
      this.customerType = data;
    });
  }

  edit() {
    this.customerService.editCustomer(this.customerForm.value, this.customerId).subscribe(data => {
      this.router.navigateByUrl('/customer-list');
      this.toastr.success('Thanks!', 'Edit Customer successfully !');
    });
  }

  compareFn(c1: any, c2: any): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }
}

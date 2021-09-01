import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {EmployeeService} from '../../../services/employee.service';
import {CustomerService} from '../../../services/customer.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-dialog-customer',
  templateUrl: './dialog-customer.component.html',
  styleUrls: ['./dialog-customer.component.css']
})
export class DialogCustomerComponent implements OnInit {

  public customerName: string;
  public customerId: number;

  constructor(
    public dialogRef: MatDialogRef<DialogCustomerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public customerService: CustomerService, public toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.customerName = this.data.name.customerName;
    this.customerId = this.data.name.id;
    console.log(this.customerName);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  delete() {
    this.customerService.deleteCustomer(this.customerId).subscribe(dataDialog => {
      this.dialogRef.close();
      this.toastr.warning('Thanks!', 'Delete Customer successfully !');
    });
  }
}

import { Component, OnInit } from '@angular/core';
import {ICustomer} from '../../../model/customer';
import {CustomerService} from '../../../services/customer.service';
import {MatDialog} from '@angular/material/dialog';
import {DialogCustomerComponent} from '../dialog-customer/dialog-customer.component';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {

  customers: ICustomer[] = [];
  p: string | number;
  term: any;

  constructor(public customerService: CustomerService,
              public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.customerService.getAllCustomer().subscribe(data => {
      this.customers = data;
    });
  }

  openDialog(id: any): void {
    console.log(id);
    this.customerService.getCustomerById(id).subscribe(dataDialog => {
      console.log(dataDialog);
      const dialogRef = this.dialog.open(DialogCustomerComponent, {
        width: '500px',
        data: {name: dataDialog},
        disableClose: true
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.ngOnInit();
      });
    });
  }

}

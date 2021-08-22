import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  createForm(createCustomer: NgForm) {
    console.log(createCustomer.value);
  }
}

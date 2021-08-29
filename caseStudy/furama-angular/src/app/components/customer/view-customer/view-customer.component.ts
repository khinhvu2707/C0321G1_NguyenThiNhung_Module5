import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CustomerService} from '../../../services/customer.service';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.css']
})
export class ViewCustomerComponent implements OnInit {

  customer: any;

  constructor(private route: ActivatedRoute,
              public customerService: CustomerService) {
  }

  ngOnInit(): void {
    const customerId = this.route.snapshot.paramMap.get('id');
    console.log(customerId);
    this.customerService.getCustomerById(customerId).subscribe(data => {
      this.customer = Array.of(data);
      console.log(this.customer);
    });
  }
}

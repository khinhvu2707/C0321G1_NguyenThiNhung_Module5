import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CustomerService} from '../../../services/customer.service';
import {ContractService} from '../../../services/contract.service';

@Component({
  selector: 'app-view-contract',
  templateUrl: './view-contract.component.html',
  styleUrls: ['./view-contract.component.css']
})
export class ViewContractComponent implements OnInit {

  contract: any;

  constructor(private route: ActivatedRoute,
              public contractService: ContractService) {
  }

  ngOnInit(): void {
    const contractId = this.route.snapshot.paramMap.get('id');
    console.log(contractId);
    this.contractService.getContractById(contractId).subscribe(data => {
      this.contract = Array.of(data);
      console.log(this.contract);
    });
  }
}

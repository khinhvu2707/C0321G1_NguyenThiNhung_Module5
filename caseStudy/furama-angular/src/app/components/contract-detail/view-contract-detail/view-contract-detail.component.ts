import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ContractDetailService} from '../../../services/contract-detail.service';

@Component({
  selector: 'app-view-contract-detail',
  templateUrl: './view-contract-detail.component.html',
  styleUrls: ['./view-contract-detail.component.css']
})
export class ViewContractDetailComponent implements OnInit {
  public contractDetail: any;

  constructor(private route: ActivatedRoute,
              public contractDetailService: ContractDetailService) { }

  ngOnInit(): void {
    const employeeId = this.route.snapshot.paramMap.get('id');
    console.log(employeeId);
    this.contractDetailService.getContractDetailById(employeeId).subscribe(data => {
      this.contractDetail = Array.of(data);
      console.log(this.contractDetail);
    });
  }

}

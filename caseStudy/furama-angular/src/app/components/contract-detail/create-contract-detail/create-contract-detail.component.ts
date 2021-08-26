import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {ContractService} from '../../../services/contract.service';
import {Router} from '@angular/router';
import {IContract} from '../../../model/contract';
import {ContractDetailService} from '../../../services/contract-detail.service';
import {AttachServiceService} from '../../../services/attach-service.service';
import {IAttachService} from '../../../model/attachService';

@Component({
  selector: 'app-create-contract-detail',
  templateUrl: './create-contract-detail.component.html',
  styleUrls: ['./create-contract-detail.component.css']
})
export class CreateContractDetailComponent implements OnInit {
  public contractDetailForm: FormGroup;
  public contracts: IContract[] = [];
  public attachServices: IAttachService[] = [];

  constructor(public contractDetailService: ContractDetailService,
              public attachService: AttachServiceService,
              public contractService: ContractService,
              public router: Router) {
  }

  ngOnInit(): void {
    this.initfrom();
    this.getAllContract();
    this.getAllAttachService();
  }


  onSubmit() {
    this.contractDetailService.createNewContractDetail(this.contractDetailForm.value).subscribe(data => {
      console.log(this.contractDetailForm.value);
      this.router.navigateByUrl('/contract-detail-list');
    });
  }

  initfrom() {
    this.contractDetailForm = new FormGroup({
      contract: new FormControl('', [Validators.required]),
      attachService: new FormControl('', [Validators.required]),
      quantity: new FormControl('', [Validators.required])
    });
  }

  getAllContract() {
    this.contractService.getAllContract().subscribe(data => {
      this.contracts = data;
    });
  }

  getAllAttachService() {
    this.attachService.getAllAttachService().subscribe(data => {
      this.attachServices = data;
    });
  }
}

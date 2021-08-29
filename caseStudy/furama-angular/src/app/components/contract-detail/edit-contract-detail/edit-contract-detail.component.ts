import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {IContract} from '../../../model/contract';
import {IAttachService} from '../../../model/attachService';
import {ContractDetailService} from '../../../services/contract-detail.service';
import {AttachServiceService} from '../../../services/attach-service.service';
import {ContractService} from '../../../services/contract.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-edit-contract-detail',
  templateUrl: './edit-contract-detail.component.html',
  styleUrls: ['./edit-contract-detail.component.css']
})
export class EditContractDetailComponent implements OnInit {
  public contractDetailForm: FormGroup;
  public contracts: IContract[] = [];
  public attachServices: IAttachService[] = [];
  private contractDetailId: number;

  constructor(public contractDetailService: ContractDetailService,
              public attachService: AttachServiceService,
              public contractService: ContractService,
              public activatedRoute: ActivatedRoute,
              public router: Router, private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.initfrom();
    this.getAllContract();
    this.getAllAttachService();
    this.activatedRoute.params.subscribe(data => {
      this.contractDetailId = data.id;
      console.log(this.contractDetailId);
      this.contractDetailService.getContractDetailById(this.contractDetailId).subscribe(data2 => {
        this.contractDetailForm.patchValue(data2);
        console.log(data2);
      });
    });
  }

  initfrom() {
    this.contractDetailForm = new FormGroup({
      contract: new FormControl('', [Validators.required]),
      attachService: new FormControl('', [Validators.required]),
      quantity: new FormControl('', [Validators.required, Validators.min(1)])
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

  editContractDetail() {
    this.contractDetailService.editContractDetail(this.contractDetailForm.value, this.contractDetailId).subscribe(data => {
      this.router.navigateByUrl('/contract-detail-list');
      this.toastr.success('Thanks!', 'Edit Contract Detail successfully !');
    });
  }

  compareFn(c1: any, c2: any): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }
}

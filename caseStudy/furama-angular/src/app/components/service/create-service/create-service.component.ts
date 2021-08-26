import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {IContract} from '../../../model/contract';
import {IAttachService} from '../../../model/attachService';
import {ContractDetailService} from '../../../services/contract-detail.service';
import {AttachServiceService} from '../../../services/attach-service.service';
import {ContractService} from '../../../services/contract.service';
import {Router} from '@angular/router';
import {IRentType} from '../../../model/rentType';
import {IServiceType} from '../../../model/serviceType';
import {ServiceService} from '../../../services/service.service';
import {RentTypeService} from '../../../services/rent-type.service';
import {ServiceTypeService} from '../../../services/service-type.service';

@Component({
  selector: 'app-create-service',
  templateUrl: './create-service.component.html',
  styleUrls: ['./create-service.component.css']
})
export class CreateServiceComponent implements OnInit {
  public serviceForm: FormGroup;
  public rentTypes: IRentType[] = [];
  public serviceTypes: IServiceType[] = [];

  constructor(public serviceService: ServiceService,
              public rentTypeService: RentTypeService,
              public serviceTypeService: ServiceTypeService,
              public router: Router) {
  }

  ngOnInit(): void {
    this.initfrom();
    this.getAllRentType();
    this.getAllServiceType();
  }


  onSubmit() {
    this.serviceService.createNewService(this.serviceForm.value).subscribe(data => {
      console.log(this.serviceForm.value);
      this.router.navigateByUrl('/service-list');
    });
  }

  initfrom() {
    this.serviceForm = new FormGroup({
      serviceCode: new FormControl('', [Validators.required, Validators.pattern('^DV-\\d{4}$')]),
      serviceName: new FormControl('', [Validators.required]),
      serviceArea: new FormControl('', [Validators.required]),
      serviceCost: new FormControl('', [Validators.required]),
      serviceMaxPeople: new FormControl('', [Validators.required]),
      rentType: new FormControl('', [Validators.required]),
      serviceType: new FormControl('', [Validators.required]),
      standardRoom: new FormControl('', [Validators.required]),
      descriptionOtherConvenience: new FormControl('', [Validators.required]),
      poolArea: new FormControl('', [Validators.required]),
      numberOfFloor: new FormControl('', [Validators.required])
    });
  }

  getAllRentType() {
    this.rentTypeService.getAllRentType().subscribe(data => {
      this.rentTypes = data;
    });
  }

  getAllServiceType() {
    this.serviceTypeService.getAllServiceType().subscribe(data => {
      this.serviceTypes = data;
    });
  }
}

import {Component, OnInit} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {IRentType} from '../../../model/rentType';
import {IServiceType} from '../../../model/serviceType';
import {ServiceService} from '../../../services/service.service';
import {RentTypeService} from '../../../services/rent-type.service';
import {ServiceTypeService} from '../../../services/service-type.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edit-service',
  templateUrl: './edit-service.component.html',
  styleUrls: ['./edit-service.component.css']
})
export class EditServiceComponent implements OnInit {
  public serviceForm: FormGroup;
  public rentTypes: IRentType[] = [];
  public serviceTypes: IServiceType[] = [];
  private serviceId: number;

  constructor(public serviceService: ServiceService,
              public rentTypeService: RentTypeService,
              public serviceTypeService: ServiceTypeService,
              public router: Router, private toastr: ToastrService,
              public activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.initfrom();
    this.getAllRentType();
    this.getAllServiceType();
    this.activatedRoute.params.subscribe(data => {
      this.serviceId = data.id;
      console.log(this.serviceId);
      this.serviceService.getServiceById(this.serviceId).subscribe(data2 => {
        this.serviceForm.patchValue(data2);
        console.log(data2);
      });
    });
  }


  initfrom() {
    this.serviceForm = new FormGroup({
      serviceCode: new FormControl('', [Validators.required, Validators.pattern('^DV-\\d{4}$')]),
      serviceName: new FormControl('', [Validators.required]),
      serviceArea: new FormControl('', [Validators.required, Validators.min(1)]),
      serviceCost: new FormControl('', [Validators.required, Validators.min(1)]),
      serviceMaxPeople: new FormControl('', [Validators.required, Validators.min(1)]),
      rentType: new FormControl('', [Validators.required]),
      serviceType: new FormControl('', [Validators.required]),
      standardRoom: new FormControl('', [Validators.required]),
      descriptionOtherConvenience: new FormControl('', [Validators.required]),
      poolArea: new FormControl('', [Validators.required, Validators.min(1)]),
      numberOfFloor: new FormControl('', [Validators.required, Validators.min(1)])
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

  editService() {
    this.serviceService.editService(this.serviceForm.value, this.serviceId).subscribe(data => {
      this.router.navigateByUrl('/service-list');
      this.toastr.success('Thanks!', 'Edit Service successfully !');
    });
  }

  compareFn(c1: any, c2: any): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }
}

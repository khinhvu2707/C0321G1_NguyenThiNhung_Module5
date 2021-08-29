import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EmployeeService} from '../../../services/employee.service';
import {ServiceService} from '../../../services/service.service';

@Component({
  selector: 'app-view-service',
  templateUrl: './view-service.component.html',
  styleUrls: ['./view-service.component.css']
})
export class ViewServiceComponent implements OnInit {
  services: any;

  constructor(private route: ActivatedRoute,
              public serviceService: ServiceService) {
  }

  ngOnInit(): void {
    const serviceId = this.route.snapshot.paramMap.get('id');
    console.log(serviceId);
    this.serviceService.getServiceById(serviceId).subscribe(data => {
      this.services = Array.of(data);
      console.log(this.services);
    });
  }
}

import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EmployeeService} from '../../../services/employee.service';
import {IEmployee} from '../../../model/employee';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {
  employee: IEmployee[];

  constructor(private route: ActivatedRoute,
              public employeeService: EmployeeService) {
  }

  ngOnInit(): void {
    const employeeId = this.route.snapshot.paramMap.get('id');
    console.log(employeeId);
    this.employeeService.getEmployeeById(employeeId).subscribe(data => {
      this.employee = data;
      console.log(this.employee);
    });
  }

}

import {Component, OnInit} from '@angular/core';
import {EmployeeService} from '../../../services/employee.service';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {
  public employees;

  constructor(public employeeList: EmployeeService) {
  }

  ngOnInit(): void {
    this.employeeList.getAllEmployee().subscribe(data => {
      this.employees = data;
    });
  }

}

// interface IEmployee {
//   employeeId: number;
//   employeeCode: string;
//   employeeName: string;
//   employeeBirthday: string;
//   employeeIdCard: string;
//   employeeSalary: number;
//   employeePhone: string;
//   employeeEmail: string;
//   employeeAddress: string;
//   position: number;
//   educationDegree: number;
//   division: number;
//   flag: number;
// }

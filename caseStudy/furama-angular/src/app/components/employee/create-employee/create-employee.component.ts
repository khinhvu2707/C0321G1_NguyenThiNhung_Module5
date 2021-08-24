import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {EmployeeService} from '../../../services/employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  public contactForm: FormGroup;

  constructor(public employeeService: EmployeeService) {
  }

  ngOnInit(): void {
    this.initfrom();
    this.onSubmit();
  }


  onSubmit() {
    this.employeeService.createNewEmployee(this.contactForm.value).subscribe(data => {
      console.log(this.contactForm.value);
    });
  }

  initfrom() {
    this.contactForm = new FormGroup({
      employeeCode: new FormControl(),
      employeeName: new FormControl(),
      employeeBirthday: new FormControl(),
      employeeIdCard: new FormControl(),
      employeeSalary: new FormControl(),
      employeePhone: new FormControl(),
      employeeEmail: new FormControl(),
      employeeAddress: new FormControl(),
      position: new FormControl(),
      educationDegree: new FormControl(),
      division: new FormControl(),
      flag: new FormControl(),
    });

  }
}

import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {EmployeeService} from '../../../services/employee.service';
import {DivisionService} from '../../../services/division.service';
import {EducationDegreeService} from '../../../services/education-degree.service';
import {PositionService} from '../../../services/position.service';
import {IPosition} from '../../../model/position';
import {IEducationDegree} from '../../../model/educationDegree';
import {IDivision} from '../../../model/division';
import {ToastrService} from 'ngx-toastr';
import {IEmployee} from '../../../model/employee';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  public employeeForm: FormGroup;
  divisions: IDivision[] = [];
  educations: IEducationDegree[] = [];
  positions: IPosition[] = [];
  employees: IEmployee[] = [];
  employeesByCode: IEmployee[] = [];
  message = '';

  constructor(public employeeService: EmployeeService,
              public divisionList: DivisionService,
              public educationDegreeService: EducationDegreeService,
              public positionService: PositionService,
              public router: Router, private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.initfrom();
    this.getAllData();
  }


  onSubmit() {
    this.employeeService.searchByCode(this.employeeForm.value.employeeCode).subscribe(data0 => {
      this.employeesByCode = data0;
      console.log(this.employeesByCode);
      console.log(this.employeesByCode.length);
      // tslint:disable-next-line:no-conditional-assignment
      if (this.employeesByCode.length === 0 ) {
        this.employeeService.createNewEmployee(this.employeeForm.value).subscribe(data => {
          console.log(this.employeeForm.value);
          this.router.navigateByUrl('/employee-list');
          this.toastr.success('Thanks!', 'Create new Employee successfully !');
        });
      }
      else {this.message = 'already exist';
            console.log(this.message); }
    });

  }

  initfrom() {
    this.employeeForm = new FormGroup({
      employeeCode: new FormControl('', [Validators.required, Validators.pattern('^NV-\\d{4}$')]),
      employeeName: new FormControl('', [Validators.required]),
      employeeBirthday: new FormControl('', [Validators.required]),
      employeeIdCard: new FormControl('', [Validators.required, Validators.pattern('^\\d{9}$|^\\d{12}$')]),
      employeeSalary: new FormControl('', [Validators.required, Validators.min(0)]),
      employeePhone: new FormControl('', [Validators.required, Validators.pattern('^090\\d{7}$|^\\(84\\)\\+90\\d{7}$|^091\\d{7}$|^\\(84\\)\\+91\\d{7}$')]),
      employeeEmail: new FormControl('', [Validators.required, Validators.email]),
      employeeAddress: new FormControl('', [Validators.required]),
      position: new FormControl('', [Validators.required]),
      educationDegree: new FormControl('', [Validators.required]),
      division: new FormControl('', [Validators.required])
    });
  }

  getAllData() {
    this.divisionList.getAllDivision().subscribe(data => {
      this.divisions = data;
    });
    this.educationDegreeService.getAllEducation().subscribe(data => {
      this.educations = data;
    });
    this.positionService.getAllPosition().subscribe(data => {
      this.positions = data;
    });
    this.employeeService.getAllEmployee().subscribe(data => {
      this.employees = data;
    });
  }
}

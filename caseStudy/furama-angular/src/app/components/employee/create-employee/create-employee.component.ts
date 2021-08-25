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

  constructor(public employeeService: EmployeeService,
              public divisionList: DivisionService,
              public educationDegreeService: EducationDegreeService,
              public positionService: PositionService,
              public router: Router) {
  }

  ngOnInit(): void {
    this.initfrom();
    this.getAllData();
  }


  onSubmit() {
    this.employeeService.createNewEmployee(this.employeeForm.value).subscribe(data => {
      console.log(this.employeeForm.value);
      this.router.navigateByUrl('/employee-list');
    });
  }

  initfrom() {
    this.employeeForm = new FormGroup({
      employeeCode: new FormControl('', [Validators.required, Validators.pattern('^NV-\\d{4}$')]),
      employeeName: new FormControl('', [Validators.required]),
      employeeBirthday: new FormControl('', [Validators.required]),
      employeeIdCard: new FormControl('', [Validators.required, Validators.pattern('^\\d{9}|\\d{12}$')]),
      employeeSalary: new FormControl('', [Validators.required]),
      employeePhone: new FormControl('', [Validators.required, Validators.pattern('^090\\d{7}|\\(84\\)\\+90\\d{7}|091\\d{7}|\\(84\\)\\+91\\d{7}$')]),
      employeeEmail: new FormControl('', [Validators.required]),
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
  }
}

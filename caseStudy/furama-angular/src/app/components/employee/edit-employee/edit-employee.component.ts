import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {IDivision} from '../../../model/division';
import {IEducationDegree} from '../../../model/educationDegree';
import {IPosition} from '../../../model/position';
import {EmployeeService} from '../../../services/employee.service';
import {DivisionService} from '../../../services/division.service';
import {EducationDegreeService} from '../../../services/education-degree.service';
import {PositionService} from '../../../services/position.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  public employeeForm: FormGroup;
  divisions: IDivision[] = [];
  educations: IEducationDegree[] = [];
  positions: IPosition[] = [];
  public employeeId: number;

  constructor(public employeeService: EmployeeService,
              public divisionList: DivisionService,
              public educationDegreeService: EducationDegreeService,
              public positionService: PositionService,
              public router: Router,
              public activatedRoute: ActivatedRoute,
              private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.initFrom();
    this.getAllData();
    this.activatedRoute.params.subscribe(data => {
      this.employeeId = data.id;
      console.log(this.employeeId);
      this.employeeService.getEmployeeById(this.employeeId).subscribe(data2 => {
        this.employeeForm.patchValue(data2);
        console.log(data2);
      });
    });
  }

  initFrom() {
    this.employeeForm = new FormGroup({
      employeeCode: new FormControl('', [Validators.required, Validators.pattern('^NV-\\d{4}$')]),
      employeeName: new FormControl('', [Validators.required]),
      employeeBirthday: new FormControl('', [Validators.required]),
      employeeIdCard: new FormControl('', [Validators.required, Validators.pattern('^\\d{9}$|^\\d{12}$')]),
      employeeSalary: new FormControl('', [Validators.required]),
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
  }


  editEmployee() {
    this.employeeService.editEmployee(this.employeeForm.value, this.employeeId).subscribe(data => {
      this.router.navigateByUrl('/employee-list');
      this.toastr.success('Thanks!', 'Edit Employee successfully !');
    });
  }

  compareFn(c1: any, c2: any): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }


}

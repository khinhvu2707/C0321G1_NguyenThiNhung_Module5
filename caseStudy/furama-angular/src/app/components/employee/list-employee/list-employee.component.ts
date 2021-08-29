import {Component, OnInit} from '@angular/core';
import {EmployeeService} from '../../../services/employee.service';
import {IEmployee} from '../../../model/employee';
import {MatDialog} from '@angular/material/dialog';
import {DialogEmployeeComponent} from '../dialog-employee/dialog-employee.component';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {
  employees: IEmployee[] = [];
  p: string | number;
  term: any;
  termName: any;

  constructor(public employeeList: EmployeeService,
              public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.employeeList.getAllEmployee().subscribe(data => {
      this.employees = data;
    });
  }

  openDialog(id: any): void {
    console.log(id);
    this.employeeList.getEmployeeById(id).subscribe(dataDialog => {
      console.log(dataDialog);
      const dialogRef = this.dialog.open(DialogEmployeeComponent, {
        width: '500px',
        data: {name: dataDialog},
        disableClose: true
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.ngOnInit();
      });
    });
  }

  searchByName() {
    this.employeeList.search(this.termName).subscribe(data => {
      this.employees = data;
      this.p = 1;
    });
  }

  sortByName() {
    this.employeeList.sortByName().subscribe(data => {
      this.employees = data;
      this.p = 1;
    });
  }
}


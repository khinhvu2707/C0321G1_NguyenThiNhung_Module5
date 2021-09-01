import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {EmployeeService} from '../../../services/employee.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-dialog-employee',
  templateUrl: './dialog-employee.component.html',
  styleUrls: ['./dialog-employee.component.css']
})
export class DialogEmployeeComponent implements OnInit {
  public employeeName: string;
  public employeeId: number;

  constructor(
    public dialogRef: MatDialogRef<DialogEmployeeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public employeeList: EmployeeService ,  public toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.employeeName = this.data.name.employeeName;
    this.employeeId = this.data.name.id;
    console.log(this.employeeName);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  deleteEmployee() {
    this.employeeList.deleteEmployee(this.employeeId).subscribe(dataDialog => {
      this.dialogRef.close();
      this.toastr.warning('Thanks!', 'Delete Employee successfully !');
    });
  }
}

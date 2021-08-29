import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {EmployeeService} from '../../../services/employee.service';
import {ServiceService} from '../../../services/service.service';

@Component({
  selector: 'app-dialog-service',
  templateUrl: './dialog-service.component.html',
  styleUrls: ['./dialog-service.component.css']
})
export class DialogServiceComponent implements OnInit {
  public serviceName: string;
  public serviceId: number;

  constructor(
    public dialogRef: MatDialogRef<DialogServiceComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public serviceService: ServiceService) {
  }

  ngOnInit(): void {
    this.serviceName = this.data.name.serviceName;
    this.serviceId = this.data.name.id;
    console.log(this.serviceName);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  deleteEmployee() {
    this.serviceService.deleteService(this.serviceId).subscribe(dataDialog => {
      this.dialogRef.close();
    });
  }
}

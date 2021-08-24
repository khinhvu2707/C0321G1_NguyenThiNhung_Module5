import { Component, OnInit } from '@angular/core';
import {IService} from '../../../model/interface';
import {ServiceService} from '../../../services/service.service';
import {MatDialog} from '@angular/material/dialog';
import {DialogEmployeeComponent} from '../../employee/dialog-employee/dialog-employee.component';

@Component({
  selector: 'app-list-service',
  templateUrl: './list-service.component.html',
  styleUrls: ['./list-service.component.css']
})
export class ListServiceComponent implements OnInit {

  services: IService[] = [];
  p: string | number;
  term: any;

  constructor(public serviceService: ServiceService,
              public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.serviceService.getAllService().subscribe(data => {
      this.services = data;
    });
  }

  // openDialog(id: any): void {
  //   console.log(id);
  //   this.serviceService.getEmployeeById(id).subscribe(dataDialog => {
  //     console.log(dataDialog);
  //     const dialogRef = this.dialog.open(DialogEmployeeComponent, {
  //       width: '500px',
  //       data: {name: dataDialog},
  //       disableClose: true
  //     });
  //
  //     dialogRef.afterClosed().subscribe(result => {
  //       console.log('The dialog was closed');
  //       this.ngOnInit();
  //     });
  //   });
  // }

}

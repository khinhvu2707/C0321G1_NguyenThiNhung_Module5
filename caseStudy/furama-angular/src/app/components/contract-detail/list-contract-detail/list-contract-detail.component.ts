import { Component, OnInit } from '@angular/core';
import {IContractDetail} from '../../../model/interface';
import {ContractDetailService} from '../../../services/contract-detail.service';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-list-contract-detail',
  templateUrl: './list-contract-detail.component.html',
  styleUrls: ['./list-contract-detail.component.css']
})
export class ListContractDetailComponent implements OnInit {

  contractDetails: IContractDetail[] = [];
  p: string | number;
  term: any;

  constructor(public contractDetailService: ContractDetailService,
              public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.contractDetailService.getAllContractDetail().subscribe(data => {
      this.contractDetails = data;
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

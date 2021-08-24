import { Component, OnInit } from '@angular/core';
import {IContract} from '../../../model/interface';
import {ContractService} from '../../../services/contract.service';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-list-contract',
  templateUrl: './list-contract.component.html',
  styleUrls: ['./list-contract.component.css']
})
export class ListContractComponent implements OnInit {

  contracts: IContract[] = [];
  p: string | number;
  term: any;

  constructor(public contractService: ContractService,
              public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.contractService.getAllContract().subscribe(data => {
      this.contracts = data;
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

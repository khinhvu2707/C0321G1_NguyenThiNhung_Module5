import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {EmployeeService} from '../../../services/employee.service';
import {ContractService} from '../../../services/contract.service';

@Component({
  selector: 'app-dialog-contract',
  templateUrl: './dialog-contract.component.html',
  styleUrls: ['./dialog-contract.component.css']
})
export class DialogContractComponent implements OnInit {

  public contractId: number;

  constructor(
    public dialogRef: MatDialogRef<DialogContractComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public contractService: ContractService) {
  }

  ngOnInit(): void {
    this.contractId = this.data.name.id;
    console.log(this.contractId);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  deleteContract() {
    this.contractService.deleteContract(this.contractId).subscribe(dataDialog => {
      this.dialogRef.close();
    });
  }
}

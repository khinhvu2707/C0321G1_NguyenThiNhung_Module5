import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {EmployeeService} from '../../../services/employee.service';
import {ContractDetailService} from '../../../services/contract-detail.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-dialog-contract-detail',
  templateUrl: './dialog-contract-detail.component.html',
  styleUrls: ['./dialog-contract-detail.component.css']
})
export class DialogContractDetailComponent implements OnInit {
  public contractDetailId: number;

  constructor(
    public dialogRef: MatDialogRef<DialogContractDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public contractDetailService: ContractDetailService ,  public toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.contractDetailId = this.data.name.id;
    console.log(this.contractDetailId);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  delete() {
    this.contractDetailService.deleteContractDetail(this.contractDetailId).subscribe(dataDialog => {
      this.dialogRef.close();
      this.toastr.warning('Thanks!', 'Delete Contract Detail successfully !');
    });
  }
}

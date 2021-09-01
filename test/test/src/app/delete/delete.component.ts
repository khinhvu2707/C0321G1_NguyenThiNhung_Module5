import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ToastrService} from 'ngx-toastr';
import {SotietkiemService} from '../sotietkiem.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  public soId: number;

  constructor(
    public dialogRef: MatDialogRef<DeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public sotietkiemService: SotietkiemService, public toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.soId = this.data.name.id;
    console.log(this.soId);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  delete() {
    this.sotietkiemService.delete(this.soId).subscribe(dataDialog => {
      this.dialogRef.close();
      this.toastr.warning('Thanks!', 'Delete successfully !');
    });
  }
}

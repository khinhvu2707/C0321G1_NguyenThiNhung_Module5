import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {CinemaService} from '../cinema.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-cinema-dialog',
  templateUrl: './cinema-dialog.component.html',
  styleUrls: ['./cinema-dialog.component.css']
})
export class CinemaDialogComponent implements OnInit {

  public code: string;
  public cinemaId: number;

  constructor(
    public dialogRef: MatDialogRef<CinemaDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public cinemaService: CinemaService, public toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.code = this.data.name.code;
    this.cinemaId = this.data.name.id;
    console.log(this.code);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  delete() {
    this.cinemaService.delete(this.cinemaId).subscribe(dataDialog => {
      this.dialogRef.close();
      this.toastr.warning('Thanks!', 'Delete successfully !');
    });
  }
}

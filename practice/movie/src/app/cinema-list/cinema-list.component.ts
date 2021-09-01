import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {Router} from '@angular/router';
import {Cinema} from '../cinema';
import {CinemaService} from '../cinema.service';
import {CinemaDialogComponent} from '../cinema-dialog/cinema-dialog.component';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-cinema-list',
  templateUrl: './cinema-list.component.html',
  styleUrls: ['./cinema-list.component.css']
})
export class CinemaListComponent implements OnInit {
  cinemas: Cinema[] = [];
  public termName = '';
  p = 1;

  constructor(public cinemaService: CinemaService, public dialog: MatDialog, public router: Router) {
  }

  ngOnInit() {
    this.showAll();
  }

  showAll() {
    this.cinemaService.getAll().subscribe(data => {
      this.cinemas = data;
      console.log(this.cinemas);
    });
  }

  openDialog(id: any): void {
    console.log(id);
    this.cinemaService.getById(id).subscribe(dataDialog => {
      console.log(dataDialog);
      const dialogRef = this.dialog.open(CinemaDialogComponent, {
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

  search() {
    this.cinemaService.searchByMovie(this.termName).subscribe(data => {
      console.log(this.termName);
      this.cinemas = data;
      this.p = 1;
    });
  }

  sort() {
    this.cinemaService.sortByContent().subscribe(data => {
      this.cinemas = data;
      this.p = 1;
    });
  }

}

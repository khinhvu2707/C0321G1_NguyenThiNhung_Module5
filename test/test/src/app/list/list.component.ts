import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {Router} from '@angular/router';
import {sotietkiem} from '../sotietkiem';
import {SotietkiemService} from '../sotietkiem.service';
import {DeleteComponent} from '../delete/delete.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  danhSachSTK: sotietkiem[] = [];
  public idSTK = '';
  public tenKhachHang = '';
  p = 1;

  constructor(public sotietkiemService: SotietkiemService, public dialog: MatDialog, public router: Router) {
  }

  ngOnInit() {
    this.showAll();
  }

  showAll() {
    this.sotietkiemService.getAll().subscribe(data => {
      this.danhSachSTK = data;
      console.log(this.danhSachSTK);
    });
  }

  openDialog(id: any): void {
    console.log(id);
    this.sotietkiemService.getById(id).subscribe(dataDialog => {
      console.log(dataDialog);
      const dialogRef = this.dialog.open(DeleteComponent, {
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
    this.sotietkiemService.search(this.idSTK).subscribe(data => {
      console.log(this.idSTK);
      this.danhSachSTK = data;
      this.p = 1;
    });
  }

  searchCustomer() {
    this.sotietkiemService.searchByCustomer(this.tenKhachHang).subscribe(data => {
      console.log(this.tenKhachHang);
      this.danhSachSTK = data;
      this.p = 1;
    });
  }

}

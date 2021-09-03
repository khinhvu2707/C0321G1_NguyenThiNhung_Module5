import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {Router} from '@angular/router';
import {sotietkiem} from '../sotietkiem';
import {SotietkiemService} from '../sotietkiem.service';
import {DeleteComponent} from '../delete/delete.component';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  danhSachSTK: sotietkiem[] = [];
  public tenKhachHang = '';
  p = 1;
  listSTKNotPage: sotietkiem[] = [];
  public searchFroup: FormGroup;
  indexPagination = 1;
  totalPagination: number;

  constructor(public sotietkiemService: SotietkiemService, public dialog: MatDialog, public router: Router) {
  }

  ngOnInit(): void {
    this.sotietkiemService.getAllSTK(0).subscribe((data: sotietkiem[]) => {
      this.danhSachSTK = data;
    });

    this.searchFroup = new FormGroup({
      maKhachHang: new FormControl(''),
      tenKhachHang: new FormControl(),
      ngayMoSo: new FormControl(),
      ngayGui: new FormControl(),
      kiHan: new FormControl(),
      soTienGui: new FormControl(),
      laiSuat: new FormControl(),
      uuDai: new FormControl(),
    });

    this.sotietkiemService.getAllNotPage().subscribe((data: sotietkiem[]) => {

      this.listSTKNotPage = data;
      console.log(this.listSTKNotPage);
      if ((this.listSTKNotPage.length % 5) !== 0) {
        this.totalPagination = (Math.round(this.listSTKNotPage.length / 5)) + 1;
        console.log(this.totalPagination);
      }
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
    this.sotietkiemService.searchByCus(this.searchFroup.value.tenKhachHang).subscribe((data: sotietkiem[]) => {
      console.log(this.searchFroup.value.tenKhachHang);
      console.log(this.danhSachSTK);
      return this.danhSachSTK = data;
    });
  }

  findPaginnation() {
    this.sotietkiemService.getAllSTK((this.indexPagination * 5) - 5).subscribe((data: sotietkiem[]) => {
      this.danhSachSTK = data;
    });
  }

  indexPaginationChage(value: number) {
    this.indexPagination = value;
  }

  firstPage() {
    this.indexPagination = 1;
    this.ngOnInit();
  }

  nextPage() {
    this.indexPagination = this.indexPagination + 1;
    if (this.indexPagination > this.totalPagination) {
      this.indexPagination = this.indexPagination - 1;
    }
    this.sotietkiemService.getAllSTK((this.indexPagination * 5) - 5).subscribe((data: sotietkiem[]) => {
      this.danhSachSTK = data;
    });
  }

  previousPage() {
    this.indexPagination = this.indexPagination - 1;
    if (this.indexPagination === 0) {
      this.indexPagination = 1;
      this.ngOnInit();
    } else {
      this.sotietkiemService.getAllSTK((this.indexPagination * 5) - 5).subscribe((data: sotietkiem[]) => {
        this.danhSachSTK = data;
      });
    }
  }

  lastPage() {
    this.indexPagination = this.listSTKNotPage.length / 5;
    console.log(this.indexPagination);
    console.log(this.listSTKNotPage.length);
    if ((this.listSTKNotPage.length % 5) !== 0) {
      this.totalPagination = (Math.round(this.listSTKNotPage.length / 5)) + 1;
      console.log(this.totalPagination);
      this.indexPagination = this.totalPagination;
      this.sotietkiemService.getAllSTK((this.indexPagination * 5) - 5).subscribe((data: sotietkiem[]) => {
        this.danhSachSTK = data;
      });
    }

  }
}

import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {sotietkiem} from '../sotietkiem';
import {SotietkiemService} from '../sotietkiem.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  public STKForm: FormGroup;
  public danhSachSTK: sotietkiem[] = [];
  private STKId: number;

  constructor(public sotietkiemService: SotietkiemService,
              public router: Router, public toastr: ToastrService, public activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.initfrom();
    this.getAll();
  }


  initfrom() {
    this.STKForm = new FormGroup({
      maKhachHang: new FormControl(''),
      // tslint:disable-next-line:max-line-length
      // tenkhachHang: new FormControl('', [Validators.required, Validators.pattern('[A-ZẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴ]' +
      //   '[a-zàáâãèéêìíòóôõùúăđĩũơưăạảấầẩẫậắằẳẵặẹẻẽềềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹ]+' +
      //   '(([ ][A-ZẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴ]' +
      //   '[a-zàáâãèéêìíòóôõùúăđĩũơưăạảấầẩẫậắằẳẵặẹẻẽềềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹ]+)' +
      //   '|([ ][A-ZẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴ]))+')]),
      tenKhachHang: new FormControl('', [Validators.required]),
      ngayMoSo: new FormControl('', [Validators.required]),
      ngayGui: new FormControl('', [Validators.required]),
      kiHan: new FormControl('', [Validators.required]),
      soTienGui: new FormControl('', [Validators.required, Validators.min(10000000)]),
      laiSuat: new FormControl('', [Validators.required]),
      uuDai: new FormControl('', [Validators.required]),
    });
  }

  create() {
    if (this.STKForm.valid) {
      this.sotietkiemService.create(this.STKForm.value).subscribe(data => {
        this.router.navigateByUrl('/list');
        this.toastr.success('Thanks!', 'Create successfully !');
      });
    }
  }

  getAll() {
    this.sotietkiemService.getAll().subscribe(data => {
      this.danhSachSTK = data;
    });
  }

  //
  // checkDate(abstractControl: AbstractControl): any {
  //   const star = new Date(abstractControl.value.ngayMoSo);
  //   const end = new Date(abstractControl.value.ngayGui);
  //   return star >= end ? null : {errorCode: true};
  // }
  //
  // checkNow(abstractControl: AbstractControl): any {
  //   const end = new Date(abstractControl.value.ngayGui);
  //   const now = new Date();
  //   console.log(end);
  //   console.log(now);
  //
  //   return now <= end ? null : {errorCodeTime: true};
  // }
}

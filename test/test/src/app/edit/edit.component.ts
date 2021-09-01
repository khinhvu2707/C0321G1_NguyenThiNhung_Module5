import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {SotietkiemService} from '../sotietkiem.service';
import {sotietkiem} from '../sotietkiem';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  public STKForm: FormGroup;
  public danhSachSTK: sotietkiem[] = [];
  private STKId: number;

  constructor(public sotietkiemService: SotietkiemService,
              public router: Router, public toastr: ToastrService, public activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.initfrom();
    this.getAll();
    this.activatedRoute.params.subscribe(data => {
      this.STKId = data.id;
      console.log(this.STKId);
      this.sotietkiemService.getById(this.STKId).subscribe(data2 => {
        this.STKForm.patchValue(data2);
        console.log(data2);
      });
    });
  }


  initfrom() {
    this.STKForm = new FormGroup({
      makhachHang: new FormControl(''),
      tenkhachHang: new FormControl('', [Validators.required, Validators.pattern('[A-ZẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴ]' +
        '[a-zàáâãèéêìíòóôõùúăđĩũơưăạảấầẩẫậắằẳẵặẹẻẽềềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹ]+' +
        '(([ ][A-ZẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴ]' +
        '[a-zàáâãèéêìíòóôõùúăđĩũơưăạảấầẩẫậắằẳẵặẹẻẽềềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹ]+)' +
        '|([ ][A-ZẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴ]))+')]),
      thoiGian: new FormGroup({
        ngayMoSo: new FormControl('', [Validators.required]),
        ngayGui: new FormControl('', [Validators.required, this.checkNow]),
      }, this.checkDate),
      kiHan: new FormControl('', [Validators.required]),
      soTienGui: new FormControl('', [Validators.required, Validators.min(10000000)]),
      laiSuat: new FormControl('', [Validators.required]),
      uuDai: new FormControl('', [Validators.required]),
    });
  }

  edit() {
    if (this.STKForm.valid) {
      this.sotietkiemService.edit(this.STKForm.value, this.STKId).subscribe(data => {
        this.router.navigateByUrl('/list');
        this.toastr.success('Thanks!', 'Edit successfully !');
      });
    }
  }

  getAll() {
    this.sotietkiemService.getAll().subscribe(data => {
      this.danhSachSTK = data;
    });
  }


  checkDate(abstractControl: AbstractControl): any {
    const star = new Date(abstractControl.value.ngayMoSo);
    const end = new Date(abstractControl.value.ngayGui);
    return star >= end ? null : {errorCode: true};
  }

  checkNow(abstractControl: AbstractControl): any {
    const end = new Date(abstractControl.value.ngayGui);
    const now = new Date();
    console.log(end);
    console.log(now);

    return now <= end ? null : {errorCodeTime: true};
  }

}

import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../service/product.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {CategoryService} from '../../service/category.service';
import {Category} from '../../model/category';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  productForm: FormGroup;
  categorys: Category[] = [];

  constructor(private productService: ProductService,
              private categoryService: CategoryService,
              private router: Router,
              private matSnackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.getCategory();
    this.initForm();
  }

  initForm() {
    this.productForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      price: new FormControl(),
      description: new FormControl(),
      category: new FormControl()
    });
  }

  submit() {
    this.productService.saveProduct(this.productForm.value).subscribe(() => {
      this.matSnackBar.open('Thêm mới thành công!', 'OK');
      this.router.navigateByUrl('product/list');
    });
  }

  getCategory() {
    this.categoryService.getAll().subscribe(data => {
      this.categorys = data;
    });
  }
}

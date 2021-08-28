import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/product';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Category} from '../../model/category';
import {MatSnackBar} from '@angular/material/snack-bar';
import {CategoryService} from '../../service/category.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product: Product;
  categorys: Category[] = [];
  deleteProduct = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    price: new FormControl(''),
    description: new FormControl(''),
    category: new FormControl('')
  });

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private matSnackBar: MatSnackBar,
              private categoryService: CategoryService) {
  }

  findById() {
    const productId = Number(this.activatedRoute.snapshot.params.id);
    this.productService.findById(productId).subscribe(value => {
      this.deleteProduct.setValue(this.product = value);
    });

  }

  ngOnInit(): void {
    this.findById();
    this.getCategory();
  }

  delete() {
    const id = Number(this.deleteProduct.value.id);
    this.productService.deleteProduct(id).subscribe(value => {
      this.matSnackBar.open('Xóa thành công !', 'OK');
      this.router.navigate(['/product/list']);
    }, error => {
      console.log(error);
    });
  }

  getCategory() {
    this.categoryService.getAll().subscribe(data => {
      this.categorys = data;
    });
  }

  compareFn(c1: any, c2: any): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }
}

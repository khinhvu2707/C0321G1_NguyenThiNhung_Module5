import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Product} from '../../model/product';
import {FormControl, FormGroup} from '@angular/forms';
import {CategoryService} from '../../service/category.service';
import {Category} from '../../model/category';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  categorys: Category[] = [];
  product: Product;
  editProduct = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    price: new FormControl(''),
    description: new FormControl(''),
    category: new FormControl('')
  });

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private router: Router, private categoryService: CategoryService, private matSnackBar: MatSnackBar) {
  }

  findById() {
    const productId = Number(this.activatedRoute.snapshot.params.id);
    return this.productService.findById(productId).subscribe(value => {
      this.product = value;
      this.editProduct.setValue(this.product);
    });

  }

  ngOnInit(): void {
    this.findById();
    this.getCategory();
  }

  updateProduct() {
    const product = this.editProduct.value;
    const id = this.editProduct.value.id;
    this.productService.updateProduct(id, product).subscribe(value => {
      this.matSnackBar.open('Chỉnh sửa thành công !', 'OK');
      this.router.navigateByUrl('/product/list');
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

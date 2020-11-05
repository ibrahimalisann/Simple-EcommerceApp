import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Category } from 'src/app/category/category';
import { AlertifyService } from 'src/app/services/alertify.service';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-add-forms1',
  templateUrl: './product-add-forms1.component.html',
  styleUrls: ['./product-add-forms1.component.css'],
  providers: [CategoryService, ProductService],
})
export class ProductAddForms1Component implements OnInit {
  constructor(
    private categoryServise: CategoryService,
    private productServise: ProductService,
    private alertifyServise: AlertifyService
  ) {}
  model: Product = new Product();
  categories: Category[];

  ngOnInit() {
    this.categoryServise.getCategories().subscribe((data) => {
      this.categories = data;
    });
  }

  add(form: NgForm) {
    this.productServise.addProduct(this.model).subscribe(data => {
      this.alertifyServise.success(data.name+"Successfully Added")
    });
  }
}

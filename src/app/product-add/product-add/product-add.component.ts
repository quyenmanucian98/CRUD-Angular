import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormsModule, Validators} from '@angular/forms';
import {validate} from 'codelyzer/walkerFactory/walkerFn';
import {ProductServiceService} from '../../productService/product-service.service';
import {Route, Router} from '@angular/router';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  addProductForm = this.fb.group({
    id: [''],
    name: ['', Validators.required],
    price: ['', Validators.required],
    type: [''],
  });

  constructor(private fb: FormBuilder,
              private productService: ProductServiceService,
              private route: Router) {
  }

  ngOnInit() {
  }

  submit() {
    const productNew = this.addProductForm.value;
    this.productService.add(productNew);
    this.route.navigate(['/products']);
  }

  get id() {
    return this.addProductForm.get('id');
  }

  get name() {
    return this.addProductForm.get('name');
  }

  get price() {
    return this.addProductForm.get('price');
  }
}

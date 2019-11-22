import {Component, OnInit} from '@angular/core';
import {ProductInterface} from '../../ProductInterface';
import {ProductServiceService} from '../../productService/product-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  listProduct = this.productService.getAll();

  constructor(private  productService: ProductServiceService) {
  }

  ngOnInit() {
  }

  delete(id) {
    this.productService.delete(id);
  }
}

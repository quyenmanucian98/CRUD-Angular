import {Injectable} from '@angular/core';
import {ProductAddComponent} from '../product-add/product-add/product-add.component';
import {ProductInterface} from '../ProductInterface';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  products: ProductInterface[] = [{
    id: 1,
    name: 'tung1',
    price: 1,
    type: 'cam'
  },
    {
      id: 2,
      name: 'tung2',
      price: 323,
      type: 'cam'
    },
    {
      id: 3,
      name: 'tung3',
      price: 4444,
      type: 'cam'
    },
    {
      id: 4,
      name: 'tung4',
      price: 55,
      type: 'cam'
    }];

  constructor() {
  }

  getAll() {
    return this.products;
  }

  add(product) {
    return this.products.push(product);
  }

  findById(id) {
    return this.products[id];
  }

  delete(id) {
    this.products.splice(id, 1);
  }
}

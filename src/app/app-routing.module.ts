import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProductAddComponent} from './product-add/product-add/product-add.component';
import {ProductComponent} from './product/product/product.component';
import {ProductEditComponent} from './product-edit/product-edit/product-edit.component';


const routes: Routes = [
  {path: 'products', component: ProductComponent},
  {path: 'products/create', component: ProductAddComponent},
  {path: 'products/:id/edit', component: ProductEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

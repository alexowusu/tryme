import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { AddClientComponent } from './add-client/add-client.component';
import { ProjectListComponent } from './project-list/project-list.component';

import { SigninComponent } from './signin/signin.component';
import { CustomersComponent } from './customers/customers.component';
import { AddCustomersComponent } from './add-customers/add-customers.component';
import { ProductsComponent } from './products/products.component';
import { AddProductComponent } from './add-product/add-product.component';

const routes: Routes = [
 {path: 'customers',component:CustomersComponent},
  {path: 'addclients', component: AddClientComponent},
{path: 'ProjectList', component: ProjectListComponent},
{path: 'products',component: ProductsComponent},
{path: 'signin', component:SigninComponent},
{path:'add-customers',component:AddCustomersComponent},
{path: 'add-products', component:AddProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

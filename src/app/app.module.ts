import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { ClientListComponent } from './client-list/client-list.component';
import { AddClientComponent } from './add-client/add-client.component';
import { ProjectListComponent } from './project-list/project-list.component';
// import { AddProjectComponent } from './add-project/add-project.component';
// import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { CustomersComponent } from './customers/customers.component';
import { AddCustomersComponent } from './add-customers/add-customers.component';
import { ProductsComponent } from './products/products.component';
import { AddProductComponent } from './add-product/add-product.component';

@NgModule({
  declarations: [
    AppComponent,
    // ClientListComponent,
    AddClientComponent,
    ProjectListComponent,
    // AddProjectComponent,
    // HomeComponent,
    SigninComponent,
    CustomersComponent,
    AddCustomersComponent,
    ProductsComponent,
    AddProductComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

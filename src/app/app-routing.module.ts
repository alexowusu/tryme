import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { AddClientComponent } from './add-client/add-client.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { SigninComponent } from './signin/signin.component';
import { CustomersComponent } from './customers/customers.component';
import { AddCustomersComponent } from './add-customers/add-customers.component';

const routes: Routes = [
 {path: 'customers',component:CustomersComponent},
  {path: 'addclients', component: AddClientComponent},
{path: 'ProjectList', component: ProjectListComponent},
{path: 'AddProject', component: AddProjectComponent},
{path: 'signin', component:SigninComponent},
{path:'add-customers',component:AddCustomersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

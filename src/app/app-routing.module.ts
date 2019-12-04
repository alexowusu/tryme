import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { ClientListComponent } from './client-list/client-list.component';
import { AddClientComponent } from './add-client/add-client.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path : 'clientslist', component : ClientListComponent},
  {path: 'addclients', component: AddClientComponent},
{path: 'ProjectList', component: ProjectListComponent},
{path: 'AddProject', component: AddProjectComponent},
{path:'home', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

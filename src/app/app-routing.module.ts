import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProjectsComponent } from './projects/projects.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { ProjectDetailComponent }  from './project-detail/project-detail.component';


const routes: Routes = [
	{ path: '', redirectTo: '/dashboard', pathMatch: 'full'},	
	{ path: 'dashboard', component: DashboardComponent },
	{ path: 'projects', component: ProjectsComponent },
	{ path: 'project/:id', component: ProjectDetailComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule { }

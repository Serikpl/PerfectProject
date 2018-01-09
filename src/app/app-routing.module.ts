import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProjectsComponent } from './projects/projects.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { ProjectDetailComponent }  from './project-detail/project-detail.component';
import { LoginComponent }  from './login/login.component';
import { RegistrationComponent }  from './registration/registration.component';
import { StartComponent }  from './start/start.component';


const routes: Routes = [
	{ path: '', redirectTo: '/start', pathMatch: 'full'},
	{ path: 'start', component: StartComponent },
	{ path: 'login', component: LoginComponent },	
	{ path: 'registration', component: RegistrationComponent },	
	{ path: 'dashboard', component: DashboardComponent },
	{ path: 'current-projects', component: ProjectsComponent },
	{ path: 'project/:id', component: ProjectDetailComponent },
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProjectsComponent } from './projects/projects.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { PeopleComponent }   from './people/people.component';
import { ProjectTasksComponent }  from './project-tasks/project-tasks.component';
import { ProjectMembersComponent }  from './project-members/project-members.component';
import { ProjectFilesComponent }  from './project-files/project-files.component';
import { ProjectDescriptionComponent }  from './project-description/project-description.component';

import { LoginComponent }  from './login/login.component';
import { RegistrationComponent }  from './registration/registration.component';
import { StartComponent }  from './start/start.component';


const routes: Routes = [
	{ path: '', redirectTo: '/start', pathMatch: 'full'},
	{ path: 'start', component: StartComponent },
	{ path: 'login', component: LoginComponent },	
	{ path: 'registration', component: RegistrationComponent },	
	{ path: 'dashboard', component: DashboardComponent },
	{ path: 'people', component: PeopleComponent },
	{ path: 'current-projects', component: ProjectsComponent },
	{ path: 'project/:id/tasks', component: ProjectTasksComponent },
	{ path: 'project/:id/people', component: ProjectMembersComponent },
	{ path: 'project/:id/files', component: ProjectFilesComponent },
	{ path: 'project/:id/description', component: ProjectDescriptionComponent },
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule { }

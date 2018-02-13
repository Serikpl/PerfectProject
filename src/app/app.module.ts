import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ProjectService } from './services/project.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

// components1
import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './services/message.service';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { StartComponent } from './start/start.component';
import { HeaderComponent } from './header/header.component';
import { DashboardSidebarComponent } from './dashboard-sidebar/dashboard-sidebar.component';
import { ProjectTasksComponent } from './project-tasks/project-tasks.component';
import { ProjectMembersComponent } from './project-members/project-members.component';
import { ProjectFilesComponent } from './project-files/project-files.component';
import { ProjectDescriptionComponent } from './project-description/project-description.component';
import { PeopleComponent } from './people/people.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    MessagesComponent,
    DashboardComponent,
    LoginComponent,
    RegistrationComponent,
    StartComponent,
    HeaderComponent,
    DashboardSidebarComponent,
    ProjectTasksComponent,
    ProjectMembersComponent,
    ProjectFilesComponent,
    ProjectDescriptionComponent,
    PeopleComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
    InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [ProjectService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import { Project } from '../entities/Project';
import { ProjectService } from '../services/project.service';
 
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  projects: Project[] = [];
 
  constructor(private ProjectService: ProjectService) { }
 
  ngOnInit() {
    this.getProjects();
  }
 
  getProjects(): void {
    this.ProjectService.getProjects()
      .subscribe(projects => this.projects = projects.slice(1, 5));
  }
}
import { Component, OnInit } from '@angular/core';
import { Project } from '../entities/project';
import { PROJECTS } from '../data/mock-projects';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

	projects: Project[];

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  	this.getProjects();
  }

  getProjects():void
  {
    this.projectService.getProjects()
      .subscribe(projects => this.projects = projects);
      console.log(this.projects);
  }

}

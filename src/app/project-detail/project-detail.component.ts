import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../entities/project';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ProjectService }  from '../services/project.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {

  @Input() project: Project;
  
  constructor(
	  private route: ActivatedRoute,
	  private projectService: ProjectService,
	  private location: Location
  	) { }

  ngOnInit() {
  	this.getProject();
  }

  getProject(): void {
  	const id = +this.route.snapshot.paramMap.get('id');
  	this.projectService.getProject(id)
  		.subscribe(project => this.project = project);
  	console.log(id);
  	console.log(this.project);
  }

}
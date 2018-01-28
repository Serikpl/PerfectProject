import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../entities/project';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ProjectService }  from '../services/project.service';

@Component({
  selector: 'app-project-tasks',
  templateUrl: './project-tasks.component.html',
  styleUrls: ['./project-tasks.component.less']
})
export class ProjectTasksComponent implements OnInit {

	@Input() project: Project;

  tasks:Array<any> =  [
    {
      id:1,
      title: "Task 1",
      description: "Lorem....",
      author: "Jelen 1",
      date: "14.04.2017 15:40",
      assignedFor: 'Vasia'
    },
    {
      id:2,
      title: "Make new header and footer, some style refactoring..",
      description: "Lorem....",
      author: "Jelen Gg",
      date: "14.06.2017 15:40",
      assignedFor: 'Vasia'
    },
    {
      id:3,
      title: "Task gfgggg",
      description: "Lorem....",
      author: "Jelen 1",
      date: "03.04.2017 15:40",
      assignedFor: 'Vasia2'
    },
    {
      id:5,
      title: "gggg1",
      description: "Lorem....",
      author: "Jel",
      date: "14.06.2015 15:40",
      assignedFor: 'Vasia'
    }
  ]

  constructor(
	  private route: ActivatedRoute,
	  private projectService: ProjectService,
	  private Location: Location
  	) { }

  ngOnInit() {
  	this.getProject();
  }

  getProject(): void {
  	const id = +this.route.snapshot.paramMap.get('id');
    
  	this.projectService.getProject(id)
  		.subscribe(project => this.project = project);
  }

  goBack(): void
  {
    console.log(this.Location);
    this.Location.back();
  }

  showDescriptionTask(e)
  {
    console.log(e);
  }

}

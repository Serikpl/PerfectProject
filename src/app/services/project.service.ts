import { Injectable } from '@angular/core';
import { MessageService } from './message.service';

import { Project } from '../entities/project';
import { PROJECTS } from '../data/mock-projects';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class ProjectService {

  constructor(private messageService: MessageService) { }

  getProjects(): Observable<Project[]>
  {
  	this.messageService.add('PRoject Service: fetched projects!');
  	return of(PROJECTS);
  }

  getProject(id: number): Observable<Project> {
  	this.messageService.add(`ProjectService: fetch project id=${id}`);
  	return of(PROJECTS.find(project => project.id === id));
  }

}

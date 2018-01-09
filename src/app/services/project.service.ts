import { Injectable } from '@angular/core';
import { MessageService } from './message.service';

import { Project } from '../entities/project';
import { PROJECTS } from '../data/mock-projects';

import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ProjectService {

  private projectsUrl = 'api/projects';

  constructor(
    private http: HttpClient,
    private messageService: MessageService
    ) { }

  getProjects(): Observable<Project[]>
  {
  	this.messageService.add('PRoject Service: fetched projects!');
  	return this.http.get<Project[]>(this.projectsUrl)
            .pipe(
              // tap(heroes => this.log('fetched heroes')),
              catchError(this.handleError('getProjects', []))
            );
  }

  getProject(id: number): Observable<Project> {
  	this.messageService.add(`ProjectService: fetch project id=${id}`);
  	return of(PROJECTS.find(project => project.id === id));
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
   
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
   
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
   
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

    /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add('HeroService: ' + message);
  }

}

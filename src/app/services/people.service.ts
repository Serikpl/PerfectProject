import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { People } from '../entities/people';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PeopleService {

	// private peopleUrl = 'https://randomuser.me/api/';
	private peopleUrl = 'api/people';

  constructor(private http: HttpClient) 
  { }

  getPeople(): any
  {
  	return this.http.get(this.peopleUrl)
  			.toPromise()
  			.then(resp => {
  				console.log(resp);
  				// resp.json();
  			});
  }


}

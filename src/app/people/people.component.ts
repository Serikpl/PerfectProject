import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../services/people.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.less']
})
export class PeopleComponent implements OnInit {

	people:Object;

  constructor(private peopleService: PeopleService) { }

  ngOnInit() {
  	// this.getPeople();
  }

  getPeople():void
  {
  	this.peopleService.getPeople()
        .then(data => {
          console.log(data);
        });
  }
}

interface ItemsResponse {
  results: string[];
}
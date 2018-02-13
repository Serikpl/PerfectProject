import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../services/people.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.less']
})
export class PeopleComponent implements OnInit {

  // people:Object;
  
  people:Array<any> =  [
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

  constructor() { }
  // constructor(private peopleService: PeopleService) { }
  ngOnInit() {
  	// this.getPeople();
  }

  // getPeople():void
  // {
  // 	this.peopleService.getPeople()
  //       .then(data => {
  //         console.log(data);
  //       });
  // }
}

interface ItemsResponse {
  results: string[];
}
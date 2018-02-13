import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-files',
  templateUrl: './project-files.component.html',
  styleUrls: ['./project-files.component.less']
})
export class ProjectFilesComponent implements OnInit {

  files:Array<any> =  [
    {
      id:1,
      title: "fdh.pdf",
      description: "Lorem....",
      author: "Jelen 1",
      date: "14.04.2017 15:40",
      assignedFor: 'Vasia'
    },
    {
      id:2,
      title: "document-1.doc",
      description: "Lorem....",
      author: "Jelen Gg",
      date: "14.06.2017 15:40",
      assignedFor: 'Vasia'
    },
    {
      id:3,
      title: "423523523.csv",
      description: "Lorem....",
      author: "Jelen 1",
      date: "03.04.2017 15:40",
      assignedFor: 'Vasia2'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}

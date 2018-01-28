import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard-sidebar',
  templateUrl: './dashboard-sidebar.component.html',
  styleUrls: ['./dashboard-sidebar.component.less']
})
export class DashboardSidebarComponent implements OnInit {

	projectId:number;

  constructor(
  	private router: ActivatedRoute
  	) { }

  ngOnInit() {
  	this.getProjectId();
  }

  getProjectId():void
  {
  	this.projectId = +this.router.snapshot.paramMap.get('id');
  	console.log(this.projectId);
  }


}

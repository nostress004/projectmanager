import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/Project';
import { ProjectTableComponent } from '../project-table/project-table.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  projects: Project[];

  constructor() { }

  ngOnInit() {

  }


}

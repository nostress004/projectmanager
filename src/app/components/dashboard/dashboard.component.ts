import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/Project';
import {ResourceTableComponent } from '../resource-table/resource-table.component';

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

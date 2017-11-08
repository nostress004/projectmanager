import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/Project';
<<<<<<< HEAD
import {ResourceTableComponent } from '../resource-table/resource-table.component';
=======
import { ProjectTableComponent } from '../project-table/project-table.component';
>>>>>>> 19a7b37c3a80ea58861c0b934f3dd45a190a51ad

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

import { Component, OnInit } from '@angular/core';
import { PaginationComponent } from '../pagination/pagination.component';
import { PROJECTS } from '../../mockdata/mock-projects';
import { ProjectTableRowComponent } from '../project-table-row/project-table-row.component';

@Component({
  selector: 'app-project-table',
  templateUrl: './project-table.component.html',
  styleUrls: ['./project-table.component.css']
})

export class ProjectTableComponent implements OnInit {
  projects = PROJECTS;
  skills = [
    {
      name: 'C',
      number: 2
    },
    {
      name: 'B',
      number: 3
    },
    {
      name: 'D',
      number: 4
    }
  ];

  week = 1;


  constructor() {}

  ngOnInit() {

  }

  toggleCollapse(id) {
    const state = document.getElementById('collapse' + id).style.display;
    if (state === 'none') {
      document.getElementById('collapse' + id).style.display = 'table-row';
      document.getElementById('collapseIcon' + id).className = 'fa fa-arrow-up';
    } else {
      document.getElementById('collapse' + id).style.display = 'none';
      document.getElementById('collapseIcon' + id).className =
        'fa fa-arrow-down';
    }
  }

  setBackgroundColor(plannedhours, maxhours) {
    // TODO: only for testing, real algorythm needs to be implemented 
    if (plannedhours < 222) {
      return 'table-danger';
    } else if (plannedhours < 400) {
      return 'table-warning';
    }
    return 'table-success';
  }

  showMessage() {
    alert('Callback Test');
  }

  incWeek() {
    if (this.week < 52) {
      this.week += 1;
    }
  }

  decWeek() {
    if (this.week > 1) {
      this.week -= 1;
    }
  }
}

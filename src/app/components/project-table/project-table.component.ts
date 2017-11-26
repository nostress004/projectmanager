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

  constructor() {}

  ngOnInit() {

  }

  toggleCollapse(id) {
    console.log(id);
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

  showMessage() {
    alert('Callback Test');
  }
}

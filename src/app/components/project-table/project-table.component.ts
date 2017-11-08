import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-table',
  templateUrl: './project-table.component.html',
  styleUrls: ['./project-table.component.css']
})
export class ProjectTableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  toggleCollapse(id) {
    const state = document.getElementById('collapse' + id).style.display;
    if (state === 'none') {
      document.getElementById('collapse' + id).style.display = 'table-row';
      document.getElementById('collapseIcon' + id).className = 'fa fa-arrow-up';
    } else {
      document.getElementById('collapse' + id).style.display = 'none';
      document.getElementById('collapseIcon' + id).className = 'fa fa-arrow-down';
    }
  }

}

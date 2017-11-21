import { Component, OnInit, Input } from '@angular/core';

import { Project } from '../../models/Project';

@Component({
  selector: 'app-project-table-row',
  templateUrl: './project-table-row.component.html',
  styleUrls: ['./project-table-row.component.css']
})
export class ProjectTableRowComponent implements OnInit {
  @Input() project: Project;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
    // console.log(this.index);
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
}

import { Component, OnInit } from '@angular/core';
import { PaginationComponent } from '../pagination/pagination.component';
import { RESOURCES } from '../../mockdata/mock-resources';

@Component({
  selector: 'app-resource-table',
  templateUrl: './resource-table.component.html',
  styleUrls: ['./resource-table.component.css']
})
export class ResourceTableComponent implements OnInit {
  resources = RESOURCES;
  skills = [
    {
      name: 'available',
      number: 30
    }

  ];

  week = 1;

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

  setBackgroundColor(plannedhours, maxhours) {
    // TODO: only for testing, real algorythm needs to be implemented
    if (plannedhours < 222) {
      return 'table-danger';
    } else if (plannedhours < 400) {
      return 'table-warning';
    }
    return 'table-success';
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

import { Component, OnInit } from '@angular/core';
import { PaginationComponent } from '../pagination/pagination.component';
import { PROJECTS } from '../../mockdata/mock-projects';
import { PROJECTS2 } from '../../mockdata/mock-projects2';
import { ProjectTableRowComponent } from '../project-table-row/project-table-row.component';

@Component({
  selector: 'app-project-table',
  templateUrl: './project-table.component.html',
  styleUrls: ['./project-table.component.css']
})

export class ProjectTableComponent implements OnInit {
  projects = PROJECTS2;
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
    const i = this.projects[0].calendar[0].weeks[this.week].skills;
  }

  setBackgroundColor(plannedhours, maxhours) {
    // TODO: only for testing, real algorythm needs to be implemented
    if (maxhours < 1) {
      return 'table-danger';
    } else if (maxhours < 2) {
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

  goToWeek() {
    const inputValue = parseInt((<HTMLInputElement>document.getElementById('weekInput')).value, 0);
    if (inputValue >= 49) {
      this.week = 49;
      return;
    } else if (inputValue <= 1) {
      this.week = 1;
      return;
    }
    this.week = inputValue;
  }

  valami() {
    console.log('lalala');
  }
}

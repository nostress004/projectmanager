import { Component, OnInit } from '@angular/core';
import { PaginationComponent } from '../pagination/pagination.component';
import { PROJECTS } from '../../mockdata/mock-projects';
import { PROJECTS2 } from '../../mockdata/mock-projects2';
import { Skill } from '../../models/Skill';

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
    if (maxhours > plannedhours) {
      return 'table-danger';
    } else if (maxhours === plannedhours) {
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

  incSkill(skill) {
    skill.count += 1;
  }

  decSkill(skill, skills) {
    if (skill.count > 1) {
      skill.count -= 1;
    } else {
      const index = skills.indexOf(skill);
      skills.splice(index, 1);
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
    (<HTMLInputElement>document.getElementById('weekInput')).value = '';
  }

  sumSkillCounts (project, number) {
    const dif = number - 2;
    let sum = 0;
    for (let skill of project.calendar[0].weeks[this.week  + dif].skills) {
      sum += skill.count;
    }
    return sum;
  }

  sumWeekCounts (project) {
    let sum = 0;
    for (let i = 0; i < project.calendar[0].weeks.length; i++) {
      for (let skill of project.calendar[0].weeks[i].skills) {
        sum += skill.count;
      }
    }
    return sum;
  }

  addResource(skills, id1, id2) {
    const temp = (<HTMLInputElement>document.getElementById('input' + id1 + id2)).value;
    skills.push({count: 1, name: temp});
    (<HTMLInputElement>document.getElementById('input' + id1 + id2)).value = '';
  }
}

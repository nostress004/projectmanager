import { NgForm } from '@angular/forms';

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Project } from '../../models/Project';
import { IMultiSelectOption } from 'angular-2-dropdown-multiselect';

import { PROJECTS } from '../../mockdata/mock-projects';
import { CALENDAR } from '../../mockdata/mock-calendar';
import { RESOURCES } from '../../mockdata/mock-resources';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addproject',
  templateUrl: './addproject.component.html',
  styleUrls: ['./addproject.component.css']
})
export class AddProjectComponent implements OnInit {
  projects = PROJECTS;
  calendar = CALENDAR;
  resources = RESOURCES;
  resourceCount: number = 0;
  skills = [''];

  newProject: Project = {
    id: 0,
    name: '',
    projectleader: '',
    company: '',
    risk: 0,
    startdate: null,
    duedate: null,
    plannedhours: null,
    budget: 0,
    calendar: this.calendar,
    skills: [],
    resources: []
  };

  constructor() {}

  ngOnInit() {}

  onSubmit(project: NgForm) {
    console.log(project); // { first: '', last: '' }
  }

  onMinus() {
    if (this.resourceCount > 0) this.resourceCount--;
  }

  onPlus() {
    if (50 > this.resourceCount) this.resourceCount++;
  }

  onRequirementAdd() {
    var DropdownList = document.getElementById(
        'skillselect'
      ) as HTMLSelectElement,
      SelectedIndex = DropdownList.selectedIndex,
      str: string = DropdownList.options[SelectedIndex].value,
      indexOfElement = this.newProject.skills.findIndex(i => i.skill === str);

    if (indexOfElement > -1) {
      this.newProject.skills.splice(indexOfElement, 1);
    }
    this.newProject.skills.push({
      count: this.resourceCount,
      skill: str
    });
  }

  onAddDefault() {
    for (
      var i: number = this.newProject.startdate - 1;
      i < this.newProject.duedate;
      i++
    ) {
      this.newProject.calendar[0].weeks[i].max = this.newProject.plannedhours;
    }
  }
}

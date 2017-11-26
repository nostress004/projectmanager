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
    calendar: this.calendar[0],
    skills: [],
    resources: []
  };

  constructor() {}

  ngOnInit() {}

  onSubmit(project: NgForm) {
    console.log(project); // { first: '', last: '' }
  }
}

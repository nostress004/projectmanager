import { NgForm } from '@angular/forms';

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Project } from '../../models/Project';
import { IMultiSelectOption } from 'angular-2-dropdown-multiselect';
import { PROJECTS } from '../../mockdata/mock-projects';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addproject',
  templateUrl: './addproject.component.html',
  styleUrls: ['./addproject.component.css']
})
export class AddProjectComponent implements OnInit {
  projects = PROJECTS;

  newProject: Project = {
    id: 0,
    name: '',
    projectleader: '',
    company: '',
    startdate: 0,
    duedate: 0,
    plannedhours: 0,
    maxhours: 0,
    risk: 0,
    budget: 0,
    skills: []
  };

  constructor() {}

  ngOnInit() {}

  onSubmit(project: NgForm) {
    console.log(project); // { first: '', last: '' }
  }
}

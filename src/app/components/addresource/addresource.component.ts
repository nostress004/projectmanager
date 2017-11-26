import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Resource } from '../../models/Resource';
import { ResourceListComponent } from '../resource-list/resource-list.component';
import { IMultiSelectOption } from 'angular-2-dropdown-multiselect';

import { RESOURCES } from '../../mockdata/mock-resources';
import { CALENDAR } from '../../mockdata/mock-calendar';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addresource',
  templateUrl: './addresource.component.html',
  styleUrls: ['./addresource.component.css']
})
export class AddresourceComponent implements OnInit {
  //static things
  resources = RESOURCES;
  calendar = CALENDAR;

  availableto: number;
  availablefrom: number;
  workinghours: number;

  newResource: Resource = {
    id: 0,
    firstname: '',
    lastname: '',
    email: '',
    salary: null,
    company: '',
    phone: null,
    skills: [],
    calendar: this.calendar,
    occupacity: null
  };

  optionsModel: number[];

  myOptions: IMultiSelectOption[];

  selectedOptions: { id: number; name: string }[];
  constructor() {
    this.myOptions = [
      { id: 1, name: 'JavaScript' },
      { id: 2, name: 'Java' },
      { id: 3, name: 'C++' },
      { id: 4, name: 'C#' },
      { id: 5, name: 'HTML' },
      { id: 6, name: 'CSS' },
      { id: 7, name: 'SQL' }
    ];
  }

  ngOnInit() {}

  addResource(resourceForm) {
    if (
      this.newResource.firstname &&
      this.newResource.lastname &&
      this.newResource.phone &&
      this.newResource.email
    ) {
      var idd: number,
        selOpt: string[] = [];

      if (!this.resources.length) {
        idd = 0;
      } else {
        idd = (this.resources[this.resources.length - 1].id | 0) + 1;
      }

      this.selectedOptions.map(x => selOpt.push(x.name));
      this.resources.push({
        id: idd,
        firstname: this.newResource.firstname,
        lastname: this.newResource.lastname,
        email: this.newResource.email,
        salary: this.newResource.salary,
        company: this.newResource.company,
        phone: this.newResource.phone,
        occupacity: this.newResource.occupacity,
        calendar: this.newResource.calendar,
        skills: selOpt
      });

      this.newResource = {
        id: 0,
        firstname: '',
        lastname: '',
        email: '',
        salary: null,
        company: '',
        phone: null,
        skills: [],
        calendar: this.calendar,
        occupacity: null
      };
    } else {
      window.alert('First 4 inputs are required');
    }
  }

  onChange() {
    this.selectedOptions =
      this.optionsModel.map(rec => this.myOptions.find(x => x.id === rec)) ||
      [];
  }

  onDelete(resource) {
    for (var i: number = 0; i < this.resources.length; i++) {
      if (this.resources[i].id == resource.id) {
        this.resources.splice(i, 1);
      }
    }
  }

  onAddDefault() {
    for (var i: number = this.availablefrom - 1; i < this.availableto; i++) {
      this.newResource.calendar[0].weeks[i].max = this.workinghours;
    }
  }

  onEdit(resource) {
    this.newResource.id = resource.id;
    this.newResource.firstname = resource.firstname;
    this.newResource.lastname = resource.lastname;
    this.newResource.email = resource.email;
    this.newResource.salary = resource.salary;
    this.newResource.company = resource.company;
    this.newResource.phone = resource.phone;
    this.newResource.occupacity = resource.occupacity;
    this.newResource.calendar = resource.calendar;
  }
}

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Resource } from '../../models/Resource';
import { ResourceListComponent } from '../resource-list/resource-list.component';
import { IMultiSelectOption } from 'angular-2-dropdown-multiselect';
import { RESOURCES } from '../../mockdata/mock-resources';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addresource',
  templateUrl: './addresource.component.html',
  styleUrls: ['./addresource.component.css']
})
export class AddresourceComponent implements OnInit {
  resources = RESOURCES;

  newResource: Resource = {
    id: 0,
    firstname: '',
    lastname: '',
    email: '',
    salary: 0,
    company: '',
    phone: 0,
    availablefrom: 0,
    availableto: 0,
    workinghours: 0,
    skills: []
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

  addResource(form) {
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
      availablefrom: this.newResource.availablefrom,
      availableto: this.newResource.availableto,
      workinghours: this.newResource.workinghours,
      skills: selOpt
    });
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
}

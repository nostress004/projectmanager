import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Resource } from '../../models/Resource';
import { ResourceListComponent } from '../resource-list/resource-list.component';
import { IMultiSelectOption } from 'angular-2-dropdown-multiselect';
import { RESOURCES } from '../../mockdata/mock-resources';

@Component({
  selector: 'app-addresource',
  templateUrl: './addresource.component.html',
  styleUrls: ['./addresource.component.css']
})
export class AddresourceComponent implements OnInit {
  resources = RESOURCES;

  optionsModel: number[];
  myOptions: IMultiSelectOption[];

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
    this.resources.push({
      id: 3,
      firstname: 'BOB',
      lastname: 'SUPERHERO',
      email: 'strangerBOB@gmail.com',
      salary: 40,
      company: 'BRFK',
      phone: 1235,
      availablefrom: 9999,
      availableto: 9999,
      workinghours: 2,
      skills: 'BASIC',
      hide: false
    });
  }

  onChange() {
    console.log(this.optionsModel);
  }
}

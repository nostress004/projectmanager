import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Resource } from '../../models/Resource';
import { ResourceListComponent } from '../resource-list/resource-list.component';
import { IMultiSelectOption } from 'angular-2-dropdown-multiselect';

@Component({
  selector: 'app-addresource',
  templateUrl: './addresource.component.html',
  styleUrls: ['./addresource.component.css']
})
export class AddresourceComponent implements OnInit {
  @Output() questionAdded = new EventEmitter<Resource>();

  id: number;
  name: string;
  company: string;
  email: string;
  phone: string;
  workinghours: number;
  salary: number;
  skills: string;

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

  addResource() {
    this.questionAdded.emit({
      id: this.id,
      name: this.name,
      company: this.company,
      email: this.email,
      phone: this.phone,
      workinghours: this.workinghours,
      salary: this.salary,
      skills: this.skills,
      hide: true
    });
    console.log('addresource');
    console.log(this.name);
  }

  onChange() {
    console.log(this.optionsModel);
  }
}

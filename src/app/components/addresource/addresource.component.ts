import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Resource } from '../../models/Resource';

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

  constructor() { }

  ngOnInit() {
  }

  addResource() {

    this.questionAdded.emit({ id: this.id,
                              name: this.name,
                              company: this.company,
                              email: this.email,
                              phone: this.phone,
                              workinghours: this.workinghours,
                              salary: this.salary,
                              skills: this.skills,
                              hide: true});
    console.log('addresource');
    console.log(this.name);
  }

}

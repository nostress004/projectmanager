import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addproject',
  templateUrl: './addproject.component.html',
  styleUrls: ['./addproject.component.css']
})
export class AddProjectComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
export class Task {
  id: number;
  name: string;
  plannedHours: number;
  maxHours: number;
  requiredSkills: string;
  startDate: string;
  dueDate: string;
  projectLeader: string;
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {
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


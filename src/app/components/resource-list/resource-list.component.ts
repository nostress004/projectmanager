import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../../services/question.service';

import { Resource } from '../../models/Resource';

@Component({
  selector: 'app-resource-list',
  templateUrl: './resource-list.component.html',
  styleUrls: ['./resource-list.component.css']
})

export class ResourceListComponent implements OnInit {
  resources: Resource[];

  constructor(public questionService: QuestionService) {  }

  ngOnInit() {
    this.resources = this.questionService.getResources();
  }

  addQuestion(resource: Resource) {
    this.questionService.addResource(resource);
  }
}

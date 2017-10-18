import { Component, OnInit, Input } from '@angular/core';
import { QuestionService } from '../../services/question.service';

import { Resource } from '../../models/Resource';

@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.css']
})
export class ResourceComponent implements OnInit {
  @Input('resource') resource: Resource;

  constructor(
    public questionService: QuestionService
  ) { }

  ngOnInit() {
  }

  removeQuestion(resource) {
    this.questionService.removeResource(resource);
  }

}

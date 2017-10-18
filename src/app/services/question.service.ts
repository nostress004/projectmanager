import { Injectable } from '@angular/core';
import { Resource} from '../models/Resource';

@Injectable()
export class QuestionService {
  resources: Resource[];

  constructor() { }

  // Get Questions from LS
  getResources() {
    if (localStorage.getItem('resources') === null) {
      this.resources = [];
    } else {
      this.resources = JSON.parse(localStorage.getItem('resources'));
    }
    return this.resources;
  }

  // Add Question to LS
  addResource(resource: Resource) {
    this.resources.unshift(resource);

    // Init local var
    let resources;

    if (localStorage.getItem('resources') === null) {
      resources = [];
      // Push new question
      resources.unshift(resource);
      // Set new array to LS
      localStorage.setItem('resources', JSON.stringify(resources));
    } else {
      resources = JSON.parse(localStorage.getItem('resources'));
      // Add new question
      resources.unshift(resource);
      // Re set LS
      localStorage.setItem('resources', JSON.stringify(resources));
    }
  }

  // Remove Question from LS
  removeResource(resource: Resource) {
    for (let i = 0; i < this.resources.length; i++) {
      if (resource === this.resources[i]) {
        this.resources.splice(i, 1);
        localStorage.setItem('resources', JSON.stringify(this.resources));
      }
    }
  }
}

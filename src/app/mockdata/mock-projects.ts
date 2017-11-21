import { Project } from '../models/Project';

export const PROJECTS: Project[] = [
  {
    id: 0,
    name: 'My little project 1',
    projectleader: 'Angela Merkel',
    company: 'EU',
    startdate: 20140812,
    duedate: 20190212,
    plannedhours: 500,
    maxhours: 400,
    risk: 50,
    budget: 42356,
    skills: []
  },
  {
    id: 1,
    name: 'My little project 2',
    projectleader: 'Mészáros Lőrinc',
    company: 'US',
    startdate: 20150212,
    duedate: 20200212,
    plannedhours: 3000,
    maxhours: 4500,
    risk: 20,
    budget: 560660,
    skills: []
  },
  {
    id: 2,
    name: 'My little project 3',
    projectleader: 'Orbán Viktor',
    company: 'IN',
    startdate: 20160212,
    duedate: 20200512,
    plannedhours: 500,
    maxhours: 2200,
    risk: 100,
    budget: 2506600,
    skills: []
  }
];

export interface Project {
  id: number;
  name: string;
  projectleader: string;
  company: string;
  startdate: number;
  duedate: number;
  plannedhours: number;
  maxhours: number;
  risk: number;
  budget: number;
  skills: string[];
}

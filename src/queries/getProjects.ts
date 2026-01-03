
// queries/getProjects.ts
import { Project } from '../types';
import { projectsData } from '../staticData';

export async function getProjects(): Promise<Project[]> {
  return Promise.resolve(projectsData);
}
